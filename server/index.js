import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (
      origin.startsWith('http://localhost:') ||
      origin.endsWith('.vercel.app') ||
      origin === 'https://karana-agency.vercel.app'
    ) {
      return callback(null, true);
    }
    callback(null, false); // Block other domains silently
  },
  credentials: true
}));
app.use(express.json());

// Set up public static uploads folder
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// ─── Database helpers ────────────────────────────────────────────────────────
const dbPath = path.join(__dirname, 'db.json');

const defaultDB = {
  products: [],
  orders: [],
  serviceOrders: [],
  settings: {
    '3dprint-colors': {
      'PLA+': ['White', 'Black', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Grey'],
      'PETG': ['Clear', 'Black', 'White', 'Blue', 'Red'],
      'TPU': ['Black', 'White', 'Blue', 'Red', 'Green']
    }
  }
};

const getDB = () => {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify(defaultDB, null, 2));
    return { ...defaultDB };
  }
  try {
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    // Migrate: ensure new collections exist
    if (!data.serviceOrders) data.serviceOrders = [];
    if (!data.settings) data.settings = defaultDB.settings;
    if (!data.settings['3dprint-colors']) data.settings['3dprint-colors'] = defaultDB.settings['3dprint-colors'];
    return data;
  } catch (error) {
    console.error('Error parsing db.json, resetting database:', error);
    fs.writeFileSync(dbPath, JSON.stringify(defaultDB, null, 2));
    return { ...defaultDB };
  }
};

const saveDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// ─── Auth ────────────────────────────────────────────────────────────────────
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (password === 'Srinivasakalyanam') {
    res.json({ success: true, token: 'sk-admin-token-' + Date.now() });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' });
  }
});

// ─── Products CRUD ───────────────────────────────────────────────────────────
app.get('/api/products', (req, res) => {
  const db = getDB();
  res.json(db.products);
});

app.get('/api/products/:id', (req, res) => {
  const db = getDB();
  const product = db.products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.post('/api/products', (req, res) => {
  const db = getDB();
  const newProduct = {
    id: 'prod_' + Math.random().toString(36).substr(2, 9),
    ...req.body,
    created_at: new Date().toISOString()
  };
  db.products.push(newProduct);
  saveDB(db);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const db = getDB();
  const index = db.products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    db.products[index] = {
      ...db.products[index],
      ...req.body,
      updated_at: new Date().toISOString()
    };
    saveDB(db);
    res.json(db.products[index]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.delete('/api/products/:id', (req, res) => {
  const db = getDB();
  const filtered = db.products.filter(p => p.id !== req.params.id);
  if (filtered.length !== db.products.length) {
    db.products = filtered;
    saveDB(db);
    res.json({ success: true });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// ─── File Upload ─────────────────────────────────────────────────────────────
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const fileUrl = `http://localhost:4000/uploads/${req.file.filename}`;
  res.json({ url: fileUrl, filename: req.file.originalname });
});

// ─── Product Orders CRUD ─────────────────────────────────────────────────────
app.get('/api/orders', (req, res) => {
  const db = getDB();
  res.json(db.orders);
});

app.post('/api/orders', (req, res) => {
  const db = getDB();
  const newOrder = {
    id: 'ord_' + Math.random().toString(36).substr(2, 9),
    ...req.body,
    status: 'paid',
    created_at: new Date().toISOString()
  };
  db.orders.push(newOrder);
  saveDB(db);
  res.status(201).json(newOrder);
});

app.put('/api/orders/:id/status', (req, res) => {
  const db = getDB();
  const index = db.orders.findIndex(o => o.id === req.params.id);
  if (index !== -1) {
    db.orders[index].status = req.body.status;
    db.orders[index].updated_at = new Date().toISOString();
    saveDB(db);
    res.json(db.orders[index]);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// ─── Service Orders (Contact & 3D Print) ─────────────────────────────────────
app.get('/api/service-orders', (req, res) => {
  const db = getDB();
  const sorted = [...(db.serviceOrders || [])].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  res.json(sorted);
});

app.post('/api/service-orders', (req, res) => {
  const db = getDB();
  const newOrder = {
    id: 'svc_' + Math.random().toString(36).substr(2, 9),
    ...req.body,
    status: 'new',
    created_at: new Date().toISOString()
  };
  db.serviceOrders.push(newOrder);
  saveDB(db);
  res.status(201).json(newOrder);
});

app.put('/api/service-orders/:id/status', (req, res) => {
  const db = getDB();
  const index = db.serviceOrders.findIndex(o => o.id === req.params.id);
  if (index !== -1) {
    db.serviceOrders[index].status = req.body.status;
    db.serviceOrders[index].updated_at = new Date().toISOString();
    saveDB(db);
    res.json(db.serviceOrders[index]);
  } else {
    res.status(404).json({ message: 'Service order not found' });
  }
});

// ─── Settings ─────────────────────────────────────────────────────────────────
app.get('/api/settings', (req, res) => {
  const db = getDB();
  res.json(db.settings);
});

// Get specific 3D print color options
app.get('/api/settings/3dprint-colors', (req, res) => {
  const db = getDB();
  res.json(db.settings['3dprint-colors'] || {});
});

// Update 3D print color options
app.put('/api/settings/3dprint-colors', (req, res) => {
  const db = getDB();
  db.settings['3dprint-colors'] = req.body;
  saveDB(db);
  res.json(db.settings['3dprint-colors']);
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Karana Backend Server running on http://localhost:${PORT}`);
});
