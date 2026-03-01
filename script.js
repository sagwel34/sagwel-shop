
/* ════ ДАННЫЕ ════ */
const SIZES_MAP_DEFAULT = {
  1:{S:true,M:true,L:true,XL:true},  2:{S:true,M:true,L:true,XL:true},
  3:{S:true,M:true,L:true,XL:true},  4:{S:true,M:true,L:true,XL:true},
  5:{S:true,M:true,L:true,XL:true},  6:{ONE_SIZE:true},
  7:{S:true,M:true,L:true,XL:true},  8:{S:true,M:true,L:true,XL:true},
  9:{S:true,M:true,L:true,XL:true},  10:{ONE_SIZE:true},
  11:{S:true,M:true,L:true,XL:true},  12:{S:true,M:true,L:true,XL:true},
};
let SIZES_MAP = {};

const DEFAULT_IMG = "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22220%22%20fill%3D%22%23f7f7f7%22/%3E%3Crect%20x%3D%2260%22%20y%3D%2260%22%20width%3D%2280%22%20height%3D%22100%22%20rx%3D%228%22%20fill%3D%22%23e2e2e2%22%20stroke%3D%22%23aaaaaa%22%20stroke-width%3D%221.2%22/%3E%3Cline%20x1%3D%2260%22%20y1%3D%2295%22%20x2%3D%22140%22%20y2%3D%2295%22%20stroke%3D%22%23aaaaaa%22%20stroke-width%3D%220.8%22/%3E%3Cline%20x1%3D%22100%22%20y1%3D%2260%22%20x2%3D%22100%22%20y2%3D%22160%22%20stroke%3D%22%23aaaaaa%22%20stroke-width%3D%220.8%22%20stroke-dasharray%3D%223%2C3%22/%3E%3C/svg%3E";

const DEFAULT_PRODUCTS = [
  {id:1,  name:"t-shirt", price:3333,  oldPrice:null,  cat:"tops",        img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9752252009/9752252009-r.webp",  desc:"100% organic cotton, 180 g/m². oversized relaxed fit. dropped shoulder."},
  {id:2,  name:"pants",         price:9999,  oldPrice:null,  cat:"bottoms",     img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9073252204/9073252204-r.webp",  desc:"98% cotton, 2% elastane. slim tapered fit. six functional pockets."},
  {id:3,  name:"jacket",    price:11111, oldPrice:null, cat:"tops",   img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9086252068/9086252068-r.webp",  desc:"shell: 100% nylon. fill: 600-fill goose down. dwr water-resistant coating."},
  {id:4,  name:"hoodie",           price:5555,  oldPrice:null,  cat:"tops",        img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9073252006/9073252006-r.webp",  desc:"80% cotton, 20% polyester french terry. cropped length. kangaroo pocket."},
  {id:5,  name:"jeans",           price:9999,  oldPrice:null,  cat:"bottoms",     img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9778251061/9778251061-r.webp",  desc:"100% selvedge denim, 12 oz. high-rise wide-leg cut."},
  {id:6,  name:"mini bag",         price:4444,  oldPrice:null,  cat:"accessories", img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9837261038/9837261038-1.webp",  desc:"full-grain vegetable-tanned leather. magnetic closure."},
  {id:7,  name:"shirt",       price:4444,  oldPrice:null,  cat:"tops",        img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9007251037/9007251037-r.webp",  desc:"100% european linen. relaxed straight fit. button-down collar."},
  {id:8,  name:"coat",      price:22222, oldPrice:null, cat:"tops",   img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/7241250062/7241250062-r.webp",  desc:"65% polyester, 35% cotton gabardine. water-repellent finish."},
  {id:9,  name:"midi skirt",       price:4444,  oldPrice:null,  cat:"bottoms",     img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9073252036/9073252036-r.webp",  desc:"100% recycled polyester satin. knife-pleat construction."},
  {id:10, name:"tote bag",          price:5555,  oldPrice:null,  cat:"accessories", img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/7111250013/7111250013-1.webp",  desc:"100% organic cotton canvas, 12 oz. reinforced handles."},
  {id:11, name:"print tee",        price:4444,  oldPrice:null,  cat:"tops",        img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9050252203/9050252203-r.webp", desc:"100% combed cotton, 200 g/m². screen-printed in water-based inks."},
  {id:12, name:"blazer",            price:9999,  oldPrice:null, cat:"tops",   img:"https://leback.leform.ru/img/storage/cache/1340_1200_products/photo/9711251049/9711251049-r.webp", desc:"82% polyester, 18% nylon velvet. single-breasted. two flap pockets."},
];

const INFO = {
  about: {
    title:"about sagwel store",
    body:`<p>sagwel store is an independent fashion label founded in 2020.</p>
<h4>delivery</h4><p>standard delivery 3–7 days, 500 ₽. free from 10 000 ₽. express 1–2 days in moscow/spb — 990 ₽.</p>
<h4>returns</h4><p>unworn items within 14 days. contact support@sagwel.store.</p>
<h4>contact</h4><p>hello@sagwel.store — mon–fri 10:00–18:00</p>`
  },
  policy: {
    title:"privacy policy",
    body:`<p>last updated: january 2026.</p>
<h4>data we collect</h4><p>name, email, shipping address. card numbers are not stored.</p>
<h4>how we use your data</h4><p>order processing and shipping updates only.</p>
<h4>cookies</h4><p>essential cookies only. no tracking.</p>
<h4>your rights</h4><p>write to privacy@sagwel.store to manage your data.</p>`
  }
};

/* ════ СОСТОЯНИЕ ════ */
const DELIVERY = 500;
let cart = [], user = null;
let curFilter = 'all', modalId = null, modalSize = null;

function loadState() {
  try { cart = JSON.parse(localStorage.getItem('sagwel_cart') || '[]'); } catch(e) { cart = []; }
  try {
    const u = localStorage.getItem('sagwel_user');
    if (u) {
      user = JSON.parse(u);
      if (!user.role) { user.role = 'user'; localStorage.setItem('sagwel_user', JSON.stringify(user)); }
    }
  } catch(e) { user = null; }
}

/* ════ ПРОДУКТЫ (localStorage) ════ */
function getProducts() {
  try {
    const s = localStorage.getItem('sagwel_products');
    return s ? JSON.parse(s) : [...DEFAULT_PRODUCTS];
  } catch(e) { return [...DEFAULT_PRODUCTS]; }
}
function saveProducts(p) { localStorage.setItem('sagwel_products', JSON.stringify(p)); }
function initProducts() {
  /* пересохраняем товары чтобы подхватить изменения категорий */
  saveProducts([...DEFAULT_PRODUCTS]);
  SIZES_MAP = { ...SIZES_MAP_DEFAULT };
  getProducts().forEach(p => { if (!SIZES_MAP[p.id]) SIZES_MAP[p.id] = {S:true,M:true,L:true,XL:true}; });
}

/* ════ СОЗДАТЬ ADMIN ════ */
function initAdmin() {
  const users = JSON.parse(localStorage.getItem('sagwel_users') || '[]');
  if (!users.find(u => u.role === 'admin')) {
    users.unshift({ name:'Admin', email:'admin@sagwel.store', password:'admin123', role:'admin' });
    localStorage.setItem('sagwel_users', JSON.stringify(users));
  }
}

/* ════ НАВИГАЦИЯ ════ */
function goHome() {
  curFilter = 'all';
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('catAll').classList.add('active');
  renderProducts();
  window.scrollTo({top:0,behavior:'smooth'});
}
function catClick(cat, id) {
  curFilter = cat;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  renderProducts();
}
function getFiltered() {
  const all = getProducts();
  return curFilter === 'all' ? all : all.filter(p => p.cat === curFilter);
}

/* ════ КАТАЛОГ ════ */
function renderProducts() {
  const list = getFiltered();
  document.getElementById('resultsInfo').textContent = list.length + ' item' + (list.length !== 1 ? 's' : '');
  document.getElementById('productGrid').innerHTML = list.map(p => {
    const old = p.oldPrice ? `<span class="old-price no-lower">${p.oldPrice.toLocaleString()} ₽</span>` : '';
    return `<div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img"><img src="${p.img}" alt="${p.name}"/></div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price.toLocaleString()} ₽ ${old}</div>
      </div></div>`;
  }).join('');
}

/* ════ ТОВАР МОДАЛ ════ */
function openModal(id) {
  const p = getProducts().find(x => x.id === id); if (!p) return;
  modalId = id; modalSize = null;
  document.getElementById('pmImg').src = p.img;
  document.getElementById('pmName').textContent = p.name;
  document.getElementById('pmDesc').textContent = p.desc;
  document.getElementById('pmPrice').innerHTML = `${p.price.toLocaleString()} ₽${p.oldPrice ? ` <span class="pm-old">${p.oldPrice.toLocaleString()} ₽</span>` : ''}`;
  const av = SIZES_MAP[id] || {S:true,M:true,L:true,XL:true};
  if (av.ONE_SIZE) {
    modalSize = 'ONE SIZE';
    document.getElementById('pmSizes').innerHTML =
      `<button class="pm-sz active" data-s="ONE SIZE" onclick="selModalSize('ONE SIZE')">ONE SIZE</button>`;
  } else {
    document.getElementById('pmSizes').innerHTML = ['S','M','L','XL'].map(s =>
      `<button class="pm-sz ${!av[s]?'out':''}" data-s="${s}" onclick="selModalSize('${s}')" ${!av[s]?'disabled':''}>${s}</button>`
    ).join('');
  }
  renderModalActions();
  document.getElementById('pmOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function selModalSize(s) {
  const av = SIZES_MAP[modalId] || {S:true,M:true,L:true,XL:true};
  if (!av[s]) return;
  modalSize = s;
  document.querySelectorAll('#pmSizes .pm-sz').forEach(b => b.classList.toggle('active', b.dataset.s === s));
  renderModalActions();
}
function renderModalActions() {
  const acts = document.getElementById('pmActions');
  if (!modalSize) { acts.innerHTML = `<button class="pm-add" onclick="addFromModal()">add to cart</button>`; return; }
  const key = `${modalId}_${modalSize}`;
  const item = cart.find(c => c.key === key);
  if (!item) {
    acts.innerHTML = `<button class="pm-add" onclick="addFromModal()">add to cart</button>`;
  } else {
    acts.innerHTML = `<div class="pm-qty-row">
      <div class="pm-qty-ctrl">
        <button class="pm-qbtn" onclick="modalQty(-1)">−</button>
        <div class="pm-qnum">${item.qty} шт.</div>
        <button class="pm-qbtn" onclick="modalQty(1)">+</button>
      </div>
      <button class="pm-go" onclick="closePm();toggleCart()">перейти в корзину</button>
    </div>`;
  }
}
function addFromModal() {
  if (!modalSize) { showToast('please select a size'); return; }
  const p = getProducts().find(x => x.id === modalId);
  const key = `${p.id}_${modalSize}`;
  cart.push({ ...p, key, size:modalSize, qty:1 });
  saveCart(); updateBadge(); renderModalActions();
  showToast(`${p.name} (${modalSize}) added`);
}
function modalQty(d) {
  if (!modalSize) return;
  const key = `${modalId}_${modalSize}`;
  const item = cart.find(c => c.key === key); if (!item) return;
  item.qty += d;
  if (item.qty <= 0) { cart = cart.filter(c => c.key !== key); saveCart(); updateBadge(); renderProducts(); renderModalActions(); return; }
  saveCart(); updateBadge(); renderModalActions();
}
function closePm()    { document.getElementById('pmOverlay').classList.remove('open'); document.body.style.overflow = ''; modalId = null; }
function closePmBg(e) { if (e.target === e.currentTarget) closePm(); }

/* ════ КОРЗИНА ════ */
function saveCart()  { localStorage.setItem('sagwel_cart', JSON.stringify(cart)); }
function removeFromCart(key) {
  cart = cart.filter(c => c.key !== key); saveCart(); updateBadge(); renderCart();
  if (modalId) renderModalActions();
}
function changeQty(key, d) {
  const i = cart.find(c => c.key === key); if (!i) return;
  i.qty += d;
  if (i.qty <= 0) { removeFromCart(key); return; }
  saveCart(); updateBadge(); renderCart();
  if (modalId) renderModalActions();
}
function updateBadge() {
  const n = cart.reduce((s, c) => s + c.qty, 0);
  const b = document.getElementById('cartBadge');
  b.style.display = n > 0 ? 'flex' : 'none'; b.textContent = n;
  document.getElementById('cartCount').textContent = n > 0 ? `(${n})` : '';
}
function renderCart() {
  const body = document.getElementById('cartBody'), foot = document.getElementById('cartFoot');
  if (!cart.length) { body.innerHTML = '<div class="cart-empty">your cart is empty</div>'; foot.style.display = 'none'; return; }
  foot.style.display = 'block';
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-img"><img src="${item.img}" alt="${item.name}"/></div>
      <div style="flex:1">
        <div class="ci-name">${item.name}</div>
        <div class="ci-size">size: <b>${item.size}</b></div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="changeQty('${item.key}',-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.key}',1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:7px">
        <button class="ci-del" onclick="removeFromCart('${item.key}')">✕</button>
        <div class="ci-price">${(item.price*item.qty).toLocaleString()} ₽</div>
      </div>
    </div>`).join('');
  const sub = cart.reduce((s,c) => s + c.price*c.qty, 0);
  document.getElementById('cartSubtotal').textContent = sub.toLocaleString() + ' ₽';
  document.getElementById('cartTotal').textContent    = (sub + DELIVERY).toLocaleString() + ' ₽';
}
function toggleCart() {
  const ov = document.getElementById('cartOverlay'), open = ov.classList.contains('open');
  ov.classList.toggle('open', !open);
  if (!open) { renderCart(); document.body.style.overflow = 'hidden'; }
  else document.body.style.overflow = '';
}
function closeCartBg(e) { if (e.target === e.currentTarget) toggleCart(); }
function checkout() {
  if (!user) { toggleCart(); setTimeout(openAuth, 300); showToast('sign in to checkout'); return; }
  const sub = cart.reduce((s,c) => s + c.price*c.qty, 0);
  const orders = JSON.parse(localStorage.getItem('sagwel_orders') || '[]');
  orders.unshift({ id:'ORD-'+Date.now(), date:new Date().toLocaleString('ru-RU'),
    user:user.name, email:user.email,
    items:cart.map(c => `${c.name} (${c.size}) × ${c.qty}`),
    total:sub + DELIVERY });
  localStorage.setItem('sagwel_orders', JSON.stringify(orders));
  cart = []; saveCart(); updateBadge(); renderCart(); toggleCart();
  showToast('order placed — thank you!');
}

/* ════ АВТОРИЗАЦИЯ ════ */
/* Явные open/close вместо toggle — чтобы модал всегда закрывался при входе */
function openAuth()  { document.getElementById('authModal').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeAuth() { document.getElementById('authModal').classList.remove('open'); document.body.style.overflow = ''; }
function closeAuthBg(e) { if (e.target === e.currentTarget) closeAuth(); }

function handleAuthBtn() {
  if (user) document.getElementById('userDd').classList.toggle('open');
  else openAuth();
}
function switchTab(tab) {
  document.getElementById('loginForm').style.display    = tab==='login'    ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab==='register' ? 'block' : 'none';
  document.getElementById('loginTab').classList.toggle('active',    tab==='login');
  document.getElementById('registerTab').classList.toggle('active', tab==='register');
}
function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPassword').value;
  if (!email || !pass) { showToast('fill in all fields'); return; }
  const users = JSON.parse(localStorage.getItem('sagwel_users') || '[]');
  const found = users.find(u => u.email === email && u.password === pass);
  if (!found) { showToast('invalid email or password'); return; }
  user = found;
  if (!user.role) user.role = 'user';
  localStorage.setItem('sagwel_user', JSON.stringify(user));
  updateUserUI();
  closeAuth(); /* явное закрытие */
  showToast(`welcome back, ${user.name}`);
}
function register() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPassword').value;
  if (!name || !email || !pass) { showToast('fill in all fields'); return; }
  if (pass.length < 6) { showToast('password min. 6 characters'); return; }
  const users = JSON.parse(localStorage.getItem('sagwel_users') || '[]');
  if (users.find(u => u.email === email)) { showToast('email already registered'); return; }
  const nu = { name, email, password:pass, role:'user' };
  users.push(nu); localStorage.setItem('sagwel_users', JSON.stringify(users));
  user = nu; localStorage.setItem('sagwel_user', JSON.stringify(user));
  updateUserUI();
  closeAuth(); /* явное закрытие */
  showToast(`welcome, ${name}`);
}
function logout() {
  user = null; localStorage.removeItem('sagwel_user');
  document.getElementById('userDd').classList.remove('open');
  updateUserUI(); showToast('signed out');
}
function updateUserUI() {
  const btn      = document.getElementById('authBtn');
  const adminBtn = document.getElementById('adminPanelBtn');
  if (user) {
    btn.textContent = user.name.split(' ')[0].toLowerCase();
    /* пересоздаём innerHTML чтобы не затереть дочерние элементы через textContent */
    const isAdmin = user.role === 'admin';
    document.getElementById('ddName').innerHTML =
      user.name + ' <span class="role-badge' + (isAdmin ? ' admin' : '') + '">' + (isAdmin ? 'admin' : 'user') + '</span>';
    document.getElementById('ddEmail').textContent = user.email;
    adminBtn.style.display = isAdmin ? 'inline-block' : 'none';
  } else {
    btn.textContent = 'sign in';
    document.getElementById('userDd').classList.remove('open');
    adminBtn.style.display = 'none';
  }
}

/* ════ ПАНЕЛЬ АДМИНИСТРАТОРА ════ */
function openAdmin() {
  if (!user || user.role !== 'admin') { showToast('access denied'); return; }
  document.getElementById('userDd').classList.remove('open');
  document.getElementById('adminOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  adminSwitchTab('products');
}
function closeAdmin()    { document.getElementById('adminOverlay').classList.remove('open'); document.body.style.overflow = ''; }
function closeAdminBg(e) { if (e.target === e.currentTarget) closeAdmin(); }

function adminSwitchTab(tab) {
  ['products','users','orders'].forEach(t => {
    document.getElementById('aTab_'+t).classList.toggle('active', t === tab);
  });
  if (tab === 'products') renderAdminProducts();
  else if (tab === 'users')   renderAdminUsers();
  else renderAdminOrders();
}

/* ─── TAB: PRODUCTS ─── */
function renderAdminProducts() {
  const products = getProducts();
  document.getElementById('adminBody').innerHTML = `
    <table class="ap-table">
      <thead><tr><th></th><th>name</th><th>cat</th><th>price ₽</th><th>old ₽</th><th>desc</th><th></th></tr></thead>
      <tbody id="apTbody">
        ${products.map(p => `
          <tr id="apRow${p.id}">
            <td><img class="ap-thumb" src="${p.img}" alt=""/></td>
            <td><input class="ap-inline-input" id="apN${p.id}" value="${p.name}"/></td>
            <td>
              <select class="ap-inline-input" id="apC${p.id}" style="width:96px">
                ${['tops','bottoms','outerwear','accessories'].map(c => `<option value="${c}" ${p.cat===c?'selected':''}>${c}</option>`).join('')}
              </select>
            </td>
            <td><input class="ap-inline-input" id="apP${p.id}" type="number" value="${p.price}" style="width:80px"/></td>
            <td><input class="ap-inline-input" id="apO${p.id}" type="number" value="${p.oldPrice||''}" style="width:80px" placeholder="—"/></td>
            <td><input class="ap-inline-input" id="apD${p.id}" value="${p.desc}"/></td>
            <td style="white-space:nowrap">
              <button class="ap-icon-btn save" onclick="adminSaveProduct(${p.id})" title="save">✓</button>
              <button class="ap-icon-btn" onclick="adminDeleteProduct(${p.id})" title="delete" style="margin-left:4px">✕</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>
    <div class="ap-form">
      <div class="ap-form-title">add new product</div>
      <div class="ap-grid">
        <div><label class="ap-label">name</label><input class="ap-input" id="apNewName" placeholder="product name"/></div>
        <div><label class="ap-label">category</label>
          <select class="ap-select" id="apNewCat">
            <option value="tops">tops</option><option value="bottoms">bottoms</option>
            <option value="outerwear">outerwear</option><option value="accessories">accessories</option>
          </select>
        </div>
        <div><label class="ap-label">price (₽)</label><input class="ap-input" id="apNewPrice" type="number" placeholder="4990"/></div>
        <div><label class="ap-label">old price (₽)</label><input class="ap-input" id="apNewOld" type="number" placeholder="optional"/></div>
        <div class="ap-grid-full"><label class="ap-label">description</label>
          <textarea class="ap-textarea" id="apNewDesc" rows="2" placeholder="material, fit, care..."></textarea>
        </div>
      </div>
      <button class="ap-submit" onclick="adminAddProduct()">add product</button>
    </div>`;
}
function adminSaveProduct(id) {
  const products = getProducts();
  const p = products.find(x => x.id === id); if (!p) return;
  p.name     = document.getElementById('apN'+id).value.trim() || p.name;
  p.cat      = document.getElementById('apC'+id).value;
  p.price    = parseInt(document.getElementById('apP'+id).value) || p.price;
  p.oldPrice = parseInt(document.getElementById('apO'+id).value) || null;
  p.desc     = document.getElementById('apD'+id).value.trim() || p.desc;
  saveProducts(products); renderProducts();
  showToast(`"${p.name}" saved`);
}
function adminDeleteProduct(id) {
  if (!confirm('delete this product?')) return;
  saveProducts(getProducts().filter(p => p.id !== id));
  renderProducts(); renderAdminProducts();
  showToast('product deleted');
}
function adminAddProduct() {
  const name  = document.getElementById('apNewName').value.trim();
  const price = parseInt(document.getElementById('apNewPrice').value);
  if (!name || !price) { showToast('fill in name and price'); return; }
  const products = getProducts();
  const newId    = Math.max(...products.map(p => p.id), 0) + 1;
  const oldP     = parseInt(document.getElementById('apNewOld').value) || null;
  const desc     = document.getElementById('apNewDesc').value.trim() || name;
  products.push({ id:newId, name, price, oldPrice:oldP, cat:document.getElementById('apNewCat').value, img:DEFAULT_IMG, desc });
  SIZES_MAP[newId] = {S:true,M:true,L:true,XL:true};
  saveProducts(products); renderProducts(); renderAdminProducts();
  showToast(`"${name}" added`);
}

/* ─── TAB: USERS ─── */
function renderAdminUsers() {
  const users = JSON.parse(localStorage.getItem('sagwel_users') || '[]');
  const body  = document.getElementById('adminBody');
  if (!users.length) { body.innerHTML = '<div class="admin-empty">no users yet</div>'; return; }
  body.innerHTML = `
    <table class="users-table">
      <thead><tr><th></th><th>name</th><th>email</th><th>role</th><th></th></tr></thead>
      <tbody>
        ${users.map((u,i) => `
          <tr>
            <td><div class="u-avatar">${u.name.charAt(0).toUpperCase()}</div></td>
            <td style="font-weight:600">${u.name}</td>
            <td style="color:var(--text2);text-transform:none">${u.email}</td>
            <td><span class="role-badge ${u.role==='admin'?'admin':''}">${u.role||'user'}</span></td>
            <td>${u.role==='admin'
              ? '<span style="font-size:11px;color:var(--text3)">protected</span>'
              : `<button class="ap-icon-btn" onclick="adminDeleteUser(${i})" title="delete user">✕</button>`
            }</td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}
function adminDeleteUser(idx) {
  const users = JSON.parse(localStorage.getItem('sagwel_users') || '[]');
  if (users[idx] && users[idx].role === 'admin') { showToast('cannot delete admin'); return; }
  if (!confirm(`delete user "${users[idx]?.name}"?`)) return;
  /* если удаляем текущего залогиненного — выходим */
  if (user && users[idx] && users[idx].email === user.email) logout();
  users.splice(idx, 1);
  localStorage.setItem('sagwel_users', JSON.stringify(users));
  renderAdminUsers();
  showToast('user deleted');
}

/* ─── TAB: ORDERS ─── */
function renderAdminOrders() {
  const orders = JSON.parse(localStorage.getItem('sagwel_orders') || '[]');
  const body   = document.getElementById('adminBody');
  if (!orders.length) { body.innerHTML = '<div class="admin-empty">no orders yet</div>'; return; }
  body.innerHTML = orders.map(o => `
    <div class="order-card">
      <div class="order-head"><span class="order-id">${o.id}</span><span class="order-date">${o.date}</span></div>
      <div class="order-user">user: ${o.user} (${o.email})</div>
      <div class="order-items">${o.items.join('<br>')}</div>
      <div class="order-total">total: ${o.total.toLocaleString()} ₽</div>
    </div>`).join('');
}

/* ════ INFO MODAL ════ */
function openInfo(key) {
  const d = INFO[key];
  document.getElementById('infoTitle').textContent = d.title;
  document.getElementById('infoBody').innerHTML    = d.body;
  document.getElementById('infoOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeInfo()    { document.getElementById('infoOverlay').classList.remove('open'); document.body.style.overflow = ''; }
function closeInfoBg(e) { if (e.target === e.currentTarget) closeInfo(); }

/* ════ TOAST ════ */
function showToast(msg) {
  const c = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg; c.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
}

/* ════ ГЛОБАЛЬНЫЕ СОБЫТИЯ ════ */
document.addEventListener('click', e => {
  if (!document.getElementById('userWrap').contains(e.target))
    document.getElementById('userDd').classList.remove('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closePm(); closeInfo(); closeAdmin();
    if (document.getElementById('cartOverlay').classList.contains('open')) toggleCart();
    closeAuth();
  }
});

/* ════ ИНИЦИАЛИЗАЦИЯ ════ */
initAdmin();
initProducts();
loadState();
if (user) updateUserUI();
updateBadge();
renderProducts();
