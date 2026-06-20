from flask import Flask, render_template, request, jsonify, session
import sqlite3, hashlib, os, json
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'neocart-dev-secret-2026')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0   # disable static file caching in dev
DB = os.path.join(os.path.dirname(__file__), 'neocart.db')

# ─── DB SETUP ─────────────────────────────────────────────────────────────────
def get_db():
    conn = sqlite3.connect(DB)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    c = conn.cursor()
    c.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT NOT NULL,
            email      TEXT UNIQUE NOT NULL,
            password   TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now'))
        );
        CREATE TABLE IF NOT EXISTS cart_items (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id    INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            qty        INTEGER DEFAULT 1,
            UNIQUE(user_id, product_id),
            FOREIGN KEY(user_id) REFERENCES users(id)
        );
        CREATE TABLE IF NOT EXISTS wishlist_items (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id    INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            UNIQUE(user_id, product_id),
            FOREIGN KEY(user_id) REFERENCES users(id)
        );
        CREATE TABLE IF NOT EXISTS orders (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id    INTEGER NOT NULL,
            items_json TEXT NOT NULL,
            total      REAL NOT NULL,
            status     TEXT DEFAULT 'Processing',
            placed_at  TEXT DEFAULT (datetime('now')),
            FOREIGN KEY(user_id) REFERENCES users(id)
        );
    """)
    conn.commit()
    conn.close()

def hash_pw(pw):
    return hashlib.sha256(pw.encode()).hexdigest()

# ─── AUTH ──────────────────────────────────────────────────────────────────────
@app.route('/api/register', methods=['POST'])
def register():
    d = request.get_json()
    name     = (d.get('name') or '').strip()
    email    = (d.get('email') or '').strip().lower()
    password = d.get('password') or ''
    if not name or not email or not password:
        return jsonify({'error': 'All fields are required.'}), 400
    if len(password) < 6:
        return jsonify({'error': 'Password must be at least 6 characters.'}), 400
    conn = get_db()
    try:
        conn.execute('INSERT INTO users (name,email,password) VALUES (?,?,?)',
                     (name, email, hash_pw(password)))
        conn.commit()
        user = conn.execute('SELECT * FROM users WHERE email=?', (email,)).fetchone()
        session['user_id'] = user['id']
        return jsonify({'message': 'Account created!', 'user': {'id': user['id'], 'name': user['name'], 'email': user['email']}}), 201
    except sqlite3.IntegrityError:
        return jsonify({'error': 'An account with this email already exists.'}), 409
    finally:
        conn.close()

@app.route('/api/login', methods=['POST'])
def login():
    d = request.get_json()
    email    = (d.get('email') or '').strip().lower()
    password = d.get('password') or ''
    conn = get_db()
    user = conn.execute('SELECT * FROM users WHERE email=? AND password=?',
                        (email, hash_pw(password))).fetchone()
    conn.close()
    if not user:
        return jsonify({'error': 'Incorrect email or password.'}), 401
    session['user_id'] = user['id']
    return jsonify({'message': 'Logged in!', 'user': {'id': user['id'], 'name': user['name'], 'email': user['email']}})

@app.route('/api/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'message': 'Logged out.'})

@app.route('/api/me')
def me():
    uid = session.get('user_id')
    if not uid:
        return jsonify({'user': None})
    conn = get_db()
    user = conn.execute('SELECT * FROM users WHERE id=?', (uid,)).fetchone()
    conn.close()
    if not user:
        session.clear()
        return jsonify({'user': None})
    return jsonify({'user': {'id': user['id'], 'name': user['name'], 'email': user['email']}})

# ─── CART ──────────────────────────────────────────────────────────────────────
@app.route('/api/cart', methods=['GET'])
def get_cart():
    uid = session.get('user_id')
    if not uid:
        return jsonify({'items': []})
    conn = get_db()
    rows = conn.execute('SELECT product_id, qty FROM cart_items WHERE user_id=?', (uid,)).fetchall()
    conn.close()
    return jsonify({'items': [{'product_id': r['product_id'], 'qty': r['qty']} for r in rows]})

@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    uid = session.get('user_id')
    if not uid:
        return jsonify({'error': 'Login to save cart.'}), 401
    d   = request.get_json()
    pid = d.get('product_id')
    qty = d.get('qty', 1)
    conn = get_db()
    existing = conn.execute('SELECT qty FROM cart_items WHERE user_id=? AND product_id=?', (uid, pid)).fetchone()
    if existing:
        conn.execute('UPDATE cart_items SET qty=? WHERE user_id=? AND product_id=?', (existing['qty'] + qty, uid, pid))
    else:
        conn.execute('INSERT INTO cart_items (user_id, product_id, qty) VALUES (?,?,?)', (uid, pid, qty))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Cart updated.'})

@app.route('/api/cart/<int:product_id>', methods=['PUT'])
def update_cart(product_id):
    uid = session.get('user_id')
    if not uid:
        return jsonify({'error': 'Unauthorized'}), 401
    qty  = (request.get_json() or {}).get('qty', 1)
    conn = get_db()
    if qty <= 0:
        conn.execute('DELETE FROM cart_items WHERE user_id=? AND product_id=?', (uid, product_id))
    else:
        conn.execute('UPDATE cart_items SET qty=? WHERE user_id=? AND product_id=?', (qty, uid, product_id))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Updated.'})

@app.route('/api/cart/<int:product_id>', methods=['DELETE'])
def remove_from_cart(product_id):
    uid = session.get('user_id')
    if not uid:
        return jsonify({'error': 'Unauthorized'}), 401
    conn = get_db()
    conn.execute('DELETE FROM cart_items WHERE user_id=? AND product_id=?', (uid, product_id))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Removed.'})

@app.route('/api/cart', methods=['DELETE'])
def clear_cart():
    uid = session.get('user_id')
    if not uid:
        return jsonify({'error': 'Unauthorized'}), 401
    conn = get_db()
    conn.execute('DELETE FROM cart_items WHERE user_id=?', (uid,))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Cleared.'})

# ─── WISHLIST ──────────────────────────────────────────────────────────────────
@app.route('/api/wishlist', methods=['GET'])
def get_wishlist():
    uid = session.get('user_id')
    if not uid:
        return jsonify({'items': []})
    conn  = get_db()
    rows  = conn.execute('SELECT product_id FROM wishlist_items WHERE user_id=?', (uid,)).fetchall()
    conn.close()
    return jsonify({'items': [r['product_id'] for r in rows]})

@app.route('/api/wishlist/<int:product_id>', methods=['POST'])
def toggle_wishlist(product_id):
    uid = session.get('user_id')
    if not uid:
        return jsonify({'error': 'Login to save wishlist.'}), 401
    conn = get_db()
    existing = conn.execute('SELECT id FROM wishlist_items WHERE user_id=? AND product_id=?', (uid, product_id)).fetchone()
    if existing:
        conn.execute('DELETE FROM wishlist_items WHERE user_id=? AND product_id=?', (uid, product_id))
        conn.commit()
        conn.close()
        return jsonify({'action': 'removed'})
    else:
        conn.execute('INSERT INTO wishlist_items (user_id, product_id) VALUES (?,?)', (uid, product_id))
        conn.commit()
        conn.close()
        return jsonify({'action': 'added'})

# ─── ORDERS ────────────────────────────────────────────────────────────────────
@app.route('/api/orders', methods=['GET'])
def get_orders():
    uid = session.get('user_id')
    if not uid:
        return jsonify({'orders': []}), 401
    conn   = get_db()
    rows   = conn.execute('SELECT * FROM orders WHERE user_id=? ORDER BY placed_at DESC', (uid,)).fetchall()
    conn.close()
    orders = []
    for o in rows:
        dt = o['placed_at'][:10] if o['placed_at'] else ''
        try:
            dt = datetime.strptime(o['placed_at'], '%Y-%m-%d %H:%M:%S').strftime('%b %d, %Y')
        except:
            pass
        orders.append({'id': o['id'], 'items': o['items_json'], 'total': o['total'], 'status': o['status'], 'placed_at': dt})
    return jsonify({'orders': orders})

@app.route('/api/orders', methods=['POST'])
def place_order():
    uid = session.get('user_id')
    if not uid:
        return jsonify({'error': 'Login required.'}), 401
    d          = request.get_json()
    items_json = d.get('items_json', '[]')
    total      = d.get('total', 0)
    conn       = get_db()
    cursor     = conn.execute('INSERT INTO orders (user_id, items_json, total) VALUES (?,?,?)', (uid, items_json, total))
    conn.execute('DELETE FROM cart_items WHERE user_id=?', (uid,))
    conn.commit()
    order_id = cursor.lastrowid
    conn.close()
    return jsonify({'message': 'Order placed!', 'order_id': order_id}), 201

# ─── PAGE ──────────────────────────────────────────────────────────────────────
@app.route('/')
def index():
    return render_template('index.html')

# ─── RUN ───────────────────────────────────────────────────────────────────────
init_db()

if __name__ == '__main__':
    app.run(debug=True)