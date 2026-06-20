/* ─── SVG ICONS (replaces emojis for cross-platform support) ────────────── */
const ICONS = {
  headphones: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  keyboard:   `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M10 14h4"/></svg>`,
  camera:     `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  charger:    `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4M12 11v6M9 14h6"/></svg>`,
  watch:      `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/></svg>`,
  wallet:     `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>`,
  shirt:      `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`,
  shoe:       `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2l-3.5-5h-11L3 13z"/><path d="M3 15v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2"/><path d="M6 10V7"/></svg>`,
  clock:      `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  flame:      `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  grid:       `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  bulb:       `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
  yoga:       `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="4" r="1" fill="currentColor"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M6 8c0 4 2 6 6 8 4-2 6-4 6-8"/></svg>`,
  dumbbell:   `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 5v14M18 5v14M6 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M6 12h12"/></svg>`,
  gamepad:    `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1" fill="currentColor"/><circle cx="17" cy="11" r="1" fill="currentColor"/><path d="M5 8h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"/></svg>`,
  star:       `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  lipstick:   `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 22V8l4-4v18"/><path d="M8 22V8l-4-4v18"/><path d="M8 8h8"/></svg>`,
};

/* ─── PRODUCT DATA ───────────────────────────────────────────────────────── */
const PRODUCTS = [
  { id:1,  name:'AirPods Pro Max',        category:'Electronics', price:299, original:349, rating:4.8, reviews:2341, icon:ICONS.headphones, badge:'sale' },
  { id:2,  name:'Mechanical Keyboard',    category:'Electronics', price:129, original:null, rating:4.7, reviews:891,  icon:ICONS.keyboard,   badge:'new' },
  { id:3,  name:'4K Webcam',              category:'Electronics', price:89,  original:119, rating:4.5, reviews:654,  icon:ICONS.camera,     badge:'sale' },
  { id:4,  name:'Wireless Charger Pad',   category:'Electronics', price:39,  original:null, rating:4.3, reviews:1203, icon:ICONS.charger,    badge:null },
  { id:5,  name:'Smart Watch Series 9',   category:'Electronics', price:399, original:449, rating:4.9, reviews:3102, icon:ICONS.watch,      badge:'hot' },
  { id:6,  name:'Slim Leather Wallet',    category:'Fashion',     price:49,  original:null, rating:4.4, reviews:712,  icon:ICONS.wallet,     badge:'new' },
  { id:7,  name:'Oversized Hoodie',       category:'Fashion',     price:69,  original:89,  rating:4.6, reviews:2088, icon:ICONS.shirt,      badge:'sale' },
  { id:8,  name:'Running Sneakers',       category:'Fashion',     price:119, original:149, rating:4.7, reviews:1543, icon:ICONS.shoe,       badge:'hot' },
  { id:9,  name:'Minimalist Watch',       category:'Fashion',     price:189, original:null, rating:4.5, reviews:432,  icon:ICONS.clock,      badge:'new' },
  { id:10, name:'Ceramic Diffuser',       category:'Home',        price:55,  original:null, rating:4.6, reviews:987,  icon:ICONS.flame,      badge:'new' },
  { id:11, name:'Bamboo Desk Organiser',  category:'Home',        price:38,  original:48,  rating:4.4, reviews:567,  icon:ICONS.grid,       badge:'sale' },
  { id:12, name:'Smart LED Bulb Set',     category:'Home',        price:44,  original:null, rating:4.3, reviews:1231, icon:ICONS.bulb,       badge:null },
  { id:13, name:'Yoga Mat Pro',           category:'Sports',      price:79,  original:99,  rating:4.8, reviews:2109, icon:ICONS.yoga,       badge:'sale' },
  { id:14, name:'Resistance Band Kit',    category:'Sports',      price:29,  original:null, rating:4.5, reviews:876,  icon:ICONS.dumbbell,   badge:null },
  { id:15, name:'PS5 Controller',         category:'Gaming',      price:69,  original:79,  rating:4.9, reviews:4521, icon:ICONS.gamepad,    badge:'hot' },
  { id:16, name:'Gaming Headset 7.1',     category:'Gaming',      price:89,  original:109, rating:4.7, reviews:1876, icon:ICONS.headphones, badge:'sale' },
  { id:17, name:'Vitamin C Serum',        category:'Beauty',      price:34,  original:null, rating:4.6, reviews:3214, icon:ICONS.star,       badge:'new' },
  { id:18, name:'Matte Lip Kit',          category:'Beauty',      price:28,  original:35,  rating:4.5, reviews:1098, icon:ICONS.lipstick,   badge:'sale' },
];

/* ─── STATE ──────────────────────────────────────────────────────────────── */
let currentUser   = null;   // { id, name, email }
let cart          = {};     // { product_id: qty }
let wishlist      = new Set();
let activeFilter  = 'All';
let searchQuery   = '';
let chatOpen      = false;
let chatHistory   = [];

/* ─── INIT ───────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  await fetchMe();
  renderProducts();
  startCountdown();
  initChatbot();
  syncCartUI();
  syncWishlistUI();
});

/* ─── AUTH ───────────────────────────────────────────────────────────────── */
async function fetchMe() {
  try {
    const res  = await fetch('/api/me');
    const data = await res.json();
    if (data.user) {
      currentUser = data.user;
      applyUserUI();
      await loadServerCart();
      await loadServerWishlist();
    }
  } catch(e) {}
}

function applyUserUI() {
  document.getElementById('authButtons').style.display = 'none';
  const um = document.getElementById('userMenu');
  um.style.display = 'flex';
  document.getElementById('userInitial').textContent  = currentUser.name[0].toUpperCase();
  document.getElementById('dropdownName').textContent  = currentUser.name;
  document.getElementById('dropdownEmail').textContent = currentUser.email;
}

function resetUserUI() {
  document.getElementById('authButtons').style.display = 'flex';
  document.getElementById('userMenu').style.display    = 'none';
}

/* Open auth modal */
function openAuth(panel = 'login') {
  document.getElementById('authOverlay').classList.add('active');
  document.getElementById('authModal').classList.add('active');
  switchAuth(panel);
}
function closeAuth() {
  document.getElementById('authOverlay').classList.remove('active');
  document.getElementById('authModal').classList.remove('active');
  clearAuthErrors();
}
function switchAuth(panel) {
  document.getElementById('loginPanel').style.display    = panel === 'login'    ? 'block' : 'none';
  document.getElementById('registerPanel').style.display = panel === 'register' ? 'block' : 'none';
  clearAuthErrors();
}
function clearAuthErrors() {
  document.getElementById('loginError').textContent    = '';
  document.getElementById('registerError').textContent = '';
}

/* Login */
async function doLogin() {
  const btn   = document.getElementById('loginBtn');
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  errEl.textContent = '';
  if (!email || !pass) { errEl.textContent = 'Please fill in all fields.'; return; }
  btn.textContent = 'Signing in…'; btn.disabled = true;
  try {
    const res  = await fetch('/api/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, password: pass }) });
    const data = await res.json();
    if (!res.ok) { errEl.textContent = data.error; return; }
    currentUser = data.user;
    closeAuth();
    applyUserUI();
    // Merge local cart → server then reload
    await pushLocalCartToServer();
    await loadServerCart();
    await loadServerWishlist();
    showToast('👋', `Welcome back, ${currentUser.name.split(' ')[0]}!`, 'You\'re signed in');
  } catch(e) {
    errEl.textContent = 'Network error. Try again.';
  } finally {
    btn.textContent = 'Sign In'; btn.disabled = false;
  }
}

/* Register */
async function doRegister() {
  const btn   = document.getElementById('registerBtn');
  const name  = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const pass  = document.getElementById('registerPassword').value;
  const errEl = document.getElementById('registerError');
  errEl.textContent = '';
  if (!name || !email || !pass) { errEl.textContent = 'Please fill in all fields.'; return; }
  btn.textContent = 'Creating…'; btn.disabled = true;
  try {
    const res  = await fetch('/api/register', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, email, password: pass }) });
    const data = await res.json();
    if (!res.ok) { errEl.textContent = data.error; return; }
    currentUser = data.user;
    closeAuth();
    applyUserUI();
    await pushLocalCartToServer();
    await loadServerCart();
    showToast('🎉', `Welcome, ${currentUser.name.split(' ')[0]}!`, 'Account created successfully');
  } catch(e) {
    errEl.textContent = 'Network error. Try again.';
  } finally {
    btn.textContent = 'Create Account'; btn.disabled = false;
  }
}

/* Logout */
async function logout() {
  closeUserDropdown();
  await fetch('/api/logout', { method:'POST' });
  currentUser = null;
  cart        = {};
  wishlist    = new Set();
  resetUserUI();
  syncCartUI();
  syncWishlistUI();
  renderProducts();
  showToast('👋', 'Signed out', 'See you next time!');
}

/* User dropdown toggle */
function toggleUserDropdown() {
  document.getElementById('userDropdown').classList.toggle('open');
}
function closeUserDropdown() {
  document.getElementById('userDropdown').classList.remove('open');
}
document.addEventListener('click', (e) => {
  const um = document.getElementById('userMenu');
  if (um && !um.contains(e.target)) closeUserDropdown();
});

/* ─── SERVER CART SYNC ───────────────────────────────────────────────────── */
async function loadServerCart() {
  try {
    const res  = await fetch('/api/cart');
    const data = await res.json();
    cart = {};
    data.items.forEach(i => { cart[i.product_id] = i.qty; });
    syncCartUI();
  } catch(e) {}
}

async function pushLocalCartToServer() {
  for (const [pid, qty] of Object.entries(cart)) {
    try {
      await fetch('/api/cart', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ product_id: parseInt(pid), qty }) });
    } catch(e) {}
  }
}

async function loadServerWishlist() {
  try {
    const res  = await fetch('/api/wishlist');
    const data = await res.json();
    wishlist = new Set(data.items);
    syncWishlistUI();
    renderProducts();
  } catch(e) {}
}

/* ─── CART OPERATIONS ────────────────────────────────────────────────────── */
async function addToCart(productId) {
  const qty = cart[productId] || 0;
  cart[productId] = qty + 1;
  syncCartUI();

  if (currentUser) {
    try {
      await fetch('/api/cart', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ product_id: productId, qty: 1 }) });
    } catch(e) {}
  }

  const p = PRODUCTS.find(x => x.id === productId);
  showToast('🛒', 'Added to cart', p ? p.name : 'Item added');
}

async function updateCartQty(productId, delta) {
  const newQty = (cart[productId] || 0) + delta;
  if (newQty <= 0) {
    delete cart[productId];
    if (currentUser) {
      try { await fetch(`/api/cart/${productId}`, { method:'DELETE' }); } catch(e) {}
    }
  } else {
    cart[productId] = newQty;
    if (currentUser) {
      try { await fetch(`/api/cart/${productId}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ qty: newQty }) }); } catch(e) {}
    }
  }
  syncCartUI();
  renderCartBody();
}

async function removeFromCart(productId) {
  delete cart[productId];
  if (currentUser) {
    try { await fetch(`/api/cart/${productId}`, { method:'DELETE' }); } catch(e) {}
  }
  syncCartUI();
  renderCartBody();
}

function syncCartUI() {
  const total = Object.values(cart).reduce((s, q) => s + q, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

/* ─── CART DRAWER ────────────────────────────────────────────────────────── */
function openCart() {
  renderCartBody();
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  // close wishlist if open
  document.getElementById('wishlistDrawer').classList.remove('open');
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

function renderCartBody() {
  const body    = document.getElementById('cartBody');
  const footer  = document.getElementById('cartFooter');
  const count   = document.getElementById('cartItemCount');
  const entries = Object.entries(cart).filter(([,q]) => q > 0);

  if (entries.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><br><button class="btn-primary" onclick="closeCart()">Browse Products</button></div>`;
    footer.style.display = 'none';
    count.textContent = '';
    return;
  }

  count.textContent = `(${entries.length} item${entries.length > 1 ? 's' : ''})`;
  footer.style.display = 'block';

  let subtotal = 0;
  body.innerHTML = entries.map(([pid, qty]) => {
    const p = PRODUCTS.find(x => x.id === parseInt(pid));
    if (!p) return '';
    subtotal += p.price * qty;
    return `
      <div class="cart-item">
        <div class="cart-item-img">${p.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">$${(p.price * qty).toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateCartQty(${p.id}, -1)">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${p.id}, 1)">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${p.id})">✕ Remove</button>
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartTotal').textContent    = `$${subtotal.toFixed(2)}`;
}

/* ─── WISHLIST ───────────────────────────────────────────────────────────── */
async function toggleWishlist(productId) {
  if (!currentUser) {
    openAuth('login');
    showToast('🔒', 'Sign in required', 'Log in to save your wishlist');
    return;
  }
  const wasIn = wishlist.has(productId);
  if (wasIn) wishlist.delete(productId); else wishlist.add(productId);
  syncWishlistUI();
  renderProducts(); // refresh heart icons

  try {
    const res  = await fetch(`/api/wishlist/${productId}`, { method:'POST' });
    const data = await res.json();
    const p    = PRODUCTS.find(x => x.id === productId);
    showToast(data.action === 'added' ? '❤️' : '🤍',
      data.action === 'added' ? 'Added to wishlist' : 'Removed from wishlist',
      p ? p.name : '');
  } catch(e) { if (wasIn) wishlist.add(productId); else wishlist.delete(productId); syncWishlistUI(); }
}

function syncWishlistUI() {
  const badge = document.getElementById('wishlistBadge');
  const count = wishlist.size;
  badge.textContent    = count;
  badge.style.display  = count > 0 ? 'flex' : 'none';
}

function openWishlistDrawer() {
  closeUserDropdown();
  renderWishlistBody();
  document.getElementById('wishlistDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.getElementById('cartDrawer').classList.remove('open');
}
function closeWishlistDrawer() {
  document.getElementById('wishlistDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

function renderWishlistBody() {
  const body  = document.getElementById('wishlistBody');
  const count = document.getElementById('wishlistCount');
  const items = PRODUCTS.filter(p => wishlist.has(p.id));

  if (items.length === 0) {
    body.innerHTML = `<div class="wishlist-empty"><div class="cart-empty-icon">🤍</div><p>No saved items yet</p><br><button class="btn-primary" onclick="closeWishlistDrawer()">Browse Products</button></div>`;
    count.textContent = '';
    return;
  }
  count.textContent = `(${items.length})`;
  body.innerHTML = items.map(p => `
    <div class="cart-item">
      <div class="cart-item-img">${p.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">$${p.price.toFixed(2)}</div>
        <div class="cart-item-controls" style="margin-top:8px;gap:8px;flex-wrap:wrap">
          <button class="add-to-cart" onclick="addToCart(${p.id});renderWishlistBody()">Add to Cart</button>
          <button class="cart-item-remove" onclick="toggleWishlist(${p.id});renderWishlistBody()">✕ Remove</button>
        </div>
      </div>
    </div>`).join('');
}

/* Close all drawers when overlay clicked */
function closeAllDrawers() {
  closeCart();
  closeWishlistDrawer();
}

/* ─── ORDERS ─────────────────────────────────────────────────────────────── */
async function openOrdersModal() {
  closeUserDropdown();
  if (!currentUser) { openAuth('login'); return; }
  document.getElementById('ordersOverlay').classList.add('active');
  document.getElementById('ordersModal').classList.add('active');
  const content = document.getElementById('ordersContent');
  content.innerHTML = '<p style="color:var(--muted);text-align:center;padding:32px">Loading…</p>';
  try {
    const res    = await fetch('/api/orders');
    const data   = await res.json();
    if (!data.orders.length) {
      content.innerHTML = `<div class="empty-orders"><div class="empty-orders-icon">📦</div><p>No orders yet.<br>Start shopping!</p></div>`;
      return;
    }
    content.innerHTML = data.orders.map(o => {
      let items;
      try { items = JSON.parse(o.items); } catch(e) { items = []; }
      const preview = Array.isArray(items) ? items.slice(0,2).map(i => i.name).join(', ') + (items.length > 2 ? ` +${items.length-2} more` : '') : '';
      const statusClass = o.status === 'Processing' ? 'status-processing' : 'status-delivered';
      return `
        <div class="order-card">
          <div class="order-header">
            <div>
              <div class="order-id">Order #${o.id}</div>
              <div class="order-date">${o.placed_at}</div>
            </div>
            <span class="order-status ${statusClass}">${o.status}</span>
          </div>
          <div class="order-items-preview">${preview}</div>
          <div class="order-total" style="margin-top:10px">$${parseFloat(o.total).toFixed(2)}</div>
        </div>`;
    }).join('');
  } catch(e) {
    content.innerHTML = '<p style="color:var(--danger);text-align:center;padding:32px">Failed to load orders.</p>';
  }
}
function closeOrdersModal() {
  document.getElementById('ordersOverlay').classList.remove('active');
  document.getElementById('ordersModal').classList.remove('active');
}

/* ─── CHECKOUT ───────────────────────────────────────────────────────────── */
function checkout() {
  if (!currentUser) {
    closeCart();
    openAuth('login');
    showToast('🔒', 'Sign in to checkout', 'Create a free account to place orders');
    return;
  }
  const entries = Object.entries(cart).filter(([,q]) => q > 0);
  if (!entries.length) return;

  // Build summary
  const items = entries.map(([pid, qty]) => {
    const p = PRODUCTS.find(x => x.id === parseInt(pid));
    return { id: p.id, name: p.name, price: p.price, qty };
  });
  const total   = items.reduce((s, i) => s + i.price * i.qty, 0);
  const summary = document.getElementById('checkoutSummary');
  summary.innerHTML = items.map(i => `<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>${i.name} × ${i.qty}</span><strong>$${(i.price*i.qty).toFixed(2)}</strong></div>`).join('') +
    `<div style="border-top:1px solid var(--border);margin-top:10px;padding-top:10px;display:flex;justify-content:space-between"><strong>Total</strong><strong style="color:var(--accent)">$${total.toFixed(2)}</strong></div>`;

  document.getElementById('checkoutModal')._items = items;
  document.getElementById('checkoutModal')._total = total;

  closeCart();
  document.getElementById('checkoutOverlay').classList.add('active');
  document.getElementById('checkoutModal').classList.add('active');
}
function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('active');
  document.getElementById('checkoutModal').classList.remove('active');
  document.getElementById('checkoutError').textContent = '';
}

async function confirmOrder() {
  const address  = document.getElementById('deliveryAddress').value.trim();
  const phone    = document.getElementById('phoneNumber').value.trim();
  const payment  = document.getElementById('paymentMethod').value;
  const errEl    = document.getElementById('checkoutError');
  errEl.textContent = '';
  if (!address) { errEl.textContent = 'Please enter a delivery address.'; return; }
  if (!phone)   { errEl.textContent = 'Please enter a phone number.'; return; }

  const modal    = document.getElementById('checkoutModal');
  const items    = modal._items;
  const total    = modal._total;

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items_json: JSON.stringify(items), total })
    });
    const data = await res.json();
    if (!res.ok) { errEl.textContent = data.error; return; }
    cart = {};
    syncCartUI();
    closeCheckout();
    showToast('🎉', 'Order placed!', `Order #${data.order_id} confirmed · ${payment}`);
    // confetti burst
    triggerConfetti();
  } catch(e) {
    errEl.textContent = 'Failed to place order. Try again.';
  }
}

function triggerConfetti() {
  const emojis = ['*','+','o','x','~'];
  for (let i = 0; i < 18; i++) {
    const el  = document.createElement('div');
    el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    el.style.cssText = `position:fixed;top:-30px;left:${Math.random()*100}vw;font-size:${20+Math.random()*16}px;z-index:9999;pointer-events:none;animation:fall ${1.2+Math.random()*1.5}s ease-in forwards;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
  if (!document.getElementById('confettiStyle')) {
    const s = document.createElement('style');
    s.id = 'confettiStyle';
    s.textContent = '@keyframes fall{to{top:110vh;opacity:0;transform:rotate(360deg)}}';
    document.head.appendChild(s);
  }
}

/* ─── PRODUCTS RENDER ────────────────────────────────────────────────────── */
function renderProducts() {
  const grid      = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  let filtered    = PRODUCTS;

  if (activeFilter !== 'All') filtered = filtered.filter(p => p.category === activeFilter);
  if (searchQuery)             filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!filtered.length) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  grid.innerHTML = filtered.map(p => {
    const inWish  = wishlist.has(p.id);
    const badgeHtml = p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>` : '';
    const origHtml  = p.original ? `<span class="original">$${p.original}</span>` : '';
    const stars     = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
    return `
      <div class="product-card">
        <div class="product-img">${p.icon}</div>
        ${badgeHtml}
        <button class="product-wishlist ${inWish ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="${inWish ? 'Remove from wishlist' : 'Save to wishlist'}">
          ${inWish ? '❤️' : '🤍'}
        </button>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span>${p.rating} (${p.reviews.toLocaleString()})</span>
          </div>
          <div class="product-footer">
            <div class="product-price">${origHtml}$${p.price}</div>
            <button class="add-to-cart" onclick="addToCart(${p.id})">+ Cart</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function filterProducts(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
}

function filterAndScroll(cat) {
  filterProducts(cat);
  document.querySelectorAll('.filter-tab').forEach(t => {
    if (t.textContent.trim() === cat) t.classList.add('active');
    else t.classList.remove('active');
  });
  scrollToSection('products');
}

function handleSearch(val) {
  searchQuery = val;
  renderProducts();
}

function clearSearch() {
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  activeFilter = 'All';
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.toggle('active', t.textContent.trim() === 'All'));
  renderProducts();
}

/* ─── NAV HELPERS ────────────────────────────────────────────────────────── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  closeMobileMenu();
}

function toggleMobileMenu() {
  const burger  = document.getElementById('hamburger');
  const links   = document.getElementById('navLinks');
  const overlay = document.getElementById('mobileNavOverlay');
  burger.classList.toggle('open');
  links.classList.toggle('open');
  overlay.classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('mobileNavOverlay').classList.remove('open');
}

/* Sticky nav shadow */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,0.4)' : 'none';
});

/* ─── COUNTDOWN ──────────────────────────────────────────────────────────── */
function startCountdown() {
  let secs = 8 * 3600 + 34 * 60 + 12;
  const tick = () => {
    if (secs <= 0) { secs = 12 * 3600; }
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    const fmt = n => String(n).padStart(2,'0');
    document.getElementById('countH').textContent = fmt(h);
    document.getElementById('countM').textContent = fmt(m);
    document.getElementById('countS').textContent = fmt(s);
    secs--;
  };
  tick();
  setInterval(tick, 1000);
}

/* ─── NEWSLETTER ─────────────────────────────────────────────────────────── */
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email || !email.includes('@')) {
    showToast('⚠️', 'Invalid email', 'Please enter a valid email address');
    return;
  }
  document.getElementById('newsletterEmail').value = '';
  showToast('✉️', 'Subscribed!', 'You\'re on the early access list');
}

/* ─── TOAST ──────────────────────────────────────────────────────────────── */
function showToast(icon, title, msg) {
  const container = document.getElementById('toastContainer');
  const toast     = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<div class="toast-icon">${icon}</div><div><div class="toast-title">${title}</div><div class="toast-msg">${msg}</div></div>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateY(10px)'; toast.style.transition='all 0.3s'; setTimeout(()=>toast.remove(),300); }, 3000);
}

/* ─── CHATBOT ────────────────────────────────────────────────────────────── */
const BOT_RESPONSES = {
  'hi':        { reply: "Hey! 👋 I'm NeoBot. I can help you find products, track orders, or answer questions.", replies: ['Browse products','My cart','View deals'] },
  'hello':     { reply: "Hello! 😊 What are you looking for today?", replies: ['Electronics','Fashion','Gaming'] },
  'help':      { reply: "I can help you with product recommendations, order status, returns, and more. What do you need?", replies: ['Find a product','Order help','Return policy'] },
  'cart':      { reply: "Your cart is just a tap away — hit the 🛒 icon in the nav!", replies: ['Checkout','Browse more'] },
  'order':     { reply: "You can view all your orders by clicking your avatar → My Orders. Need help with a specific order?", replies: ['View orders','Return item'] },
  'return':    { reply: "We offer 30-day no-questions returns! Free pick-up, instant refund once we receive the item.", replies: ['Start return','Talk to human'] },
  'shipping':  { reply: "Free shipping on all orders! Same-day delivery available in 50+ cities. Standard: 2–4 days.", replies: ['Track order','More questions'] },
  'deals':     { reply: "🔥 Use code **NEOCART25** for 25% off your first order! Plus check the flash sale section.", replies: ['View deals','Best sellers'] },
  'gaming':    { reply: "Our gaming section has controllers, headsets, and accessories. Filter by Gaming to see all!", replies: ['Browse Gaming','Add PS5 Controller'] },
  'electronics': { reply: "We carry AirPods, smart watches, keyboards, and more. Want me to recommend something?", replies: ['Show Electronics','Smart watches','Headphones'] },
  'default':   { reply: "That's a great question! For detailed help, our human team is available 9am–10pm. Anything else I can help with?", replies: ['Browse products','View deals','Order help'] }
};

function initChatbot() {
  addBotMessage("Hi! 👋 I'm NeoBot. What can I help you with today?", ['Browse products','Deals & offers','Shipping info','My orders']);
}

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatWindow').classList.toggle('open', chatOpen);
}

function addBotMessage(text, quickReplies = []) {
  const msgs = document.getElementById('chatMessages');
  const qr   = document.getElementById('quickReplies');

  // typing indicator
  const typing = document.createElement('div');
  typing.className = 'msg bot';
  typing.innerHTML = '<div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const div       = document.createElement('div');
    div.className   = 'msg bot';
    div.innerHTML   = `<div class="msg-bubble">${text}</div><div class="msg-time">${getTime()}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop  = msgs.scrollHeight;

    qr.innerHTML = quickReplies.map(r =>
      `<button class="quick-reply" onclick="sendQuickReply('${r}')">${r}</button>`
    ).join('');
  }, 700);
}

function sendQuickReply(text) {
  document.getElementById('chatInput').value = text;
  sendChatMessage();
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text  = input.value.trim();
  if (!text) return;
  input.value = '';
  autoResize(input);

  const msgs    = document.getElementById('chatMessages');
  const userDiv = document.createElement('div');
  userDiv.className = 'msg user';
  userDiv.innerHTML = `<div class="msg-bubble">${escHtml(text)}</div><div class="msg-time">${getTime()}</div>`;
  msgs.appendChild(userDiv);
  msgs.scrollTop = msgs.scrollHeight;
  document.getElementById('quickReplies').innerHTML = '';

  const key      = Object.keys(BOT_RESPONSES).find(k => text.toLowerCase().includes(k)) || 'default';
  const response = BOT_RESPONSES[key];
  addBotMessage(response.reply, response.replies || []);
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChatMessage(); }
}
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 80) + 'px';
}
function getTime() {
  return new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
}
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}