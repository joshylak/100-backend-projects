const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

const app = express();
const PORT = 3000; 
// --- Middleware ---
app.use(express.json()); // For parsing application/json request bodies
app.use(cors()); // Enable CORS for all origins (for easy frontend integration)

// --- In-Memory Product Data ---
let products = [
  {
    id: 'prod_1',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-fidelity audio with comfortable over-ear design. Up to 20 hours battery life.',
    price: 8599,
    category: 'Electronics',
    imageUrl: 'https://example.com/headphones.jpg',
    stock: 150,
    rating: 4.5
  },
  {
    id: 'prod_2',
    name: 'Organic Cotton T-Shirt',
    description: 'Soft and breathable 100% organic cotton t-shirt. Available in multiple colors.',
    price: 2500,
    category: 'Apparel',
    imageUrl: 'https://example.com/tshirt.jpg',
    stock: 300,
    rating: 4.2
  },
  {
    id: 'prod_3',
    name: 'Stainless Steel Water Bottle (750ml)',
    description: 'Double-walled insulation keeps drinks cold for 24h and hot for 12h. Leak-proof.',
    price: 1850,
    category: 'Home Goods',
    imageUrl: 'https://example.com/waterbottle.jpg',
    stock: 500,
    rating: 4.8
  },
  {
    id: 'prod_4',
    name: '4K Ultra HD Smart TV (55 inch)',
    description: 'Stunning 4K resolution, built-in smart features, and sleek design. Perfect for your living room.',
    price: 1000000.00,
    category: 'Electronics',
    imageUrl: 'https://example.com/smarttv.jpg',
    stock: 50,
    rating: 4.7
  },
  {
    id: 'prod_5',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable lumbar support, breathable mesh, and smooth-rolling casters for ultimate comfort.',
    price: 980000.00,
    category: 'Office Furniture',
    imageUrl: 'https://example.com/officechair.jpg',
    stock: 80,
    rating: 4.3
  }
];

// --- Helper Functions ---
// Validate incoming product data
const validateProduct = (product) => {
  if (!product.name || typeof product.name !== 'string' || product.name.trim() === '') {
    return 'Product name is required and must be a non-empty string.';
  }
  if (typeof product.price !== 'number' || product.price <= 0) {
    return 'Product price must be a positive number.';
  }
  if (!product.category || typeof product.category !== 'string' || product.category.trim() === '') {
    return 'Product category is required and must be a non-empty string.';
  }
  if (typeof product.stock !== 'number' || product.stock < 0) {
    return 'Product stock must be a non-negative number.';
  }
  return null; // Validation passed
};

// --- API Routes ---

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Mock E-commerce Products API!');
});

// GET all products
// Optional query parameters: search, category, minPrice, maxPrice, sortBy, order
app.get('/products', (req, res) => {
  let filteredProducts = [...products]; // Create a copy to filter

  const { search, category, minPrice, maxPrice, sortBy, order } = req.query;

  // 1. Filtering
  if (search) {
    const searchTerm = search.toLowerCase();
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );
  }

  if (category) {
    const categoryTerm = category.toLowerCase();
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === categoryTerm);
  }

  if (minPrice) {
    const min = parseFloat(minPrice);
    if (!isNaN(min)) {
      filteredProducts = filteredProducts.filter(p => p.price >= min);
    }
  }

  if (maxPrice) {
    const max = parseFloat(maxPrice);
    if (!isNaN(max)) {
      filteredProducts = filteredProducts.filter(p => p.price <= max);
    }
  }

  // 2. Sorting
  if (sortBy) {
    filteredProducts.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];

      if (aVal === undefined || bVal === undefined) return 0; // Can't sort by non-existent property

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return order === 'desc' ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
      }
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return order === 'desc' ? bVal - aVal : aVal - bVal;
      }
      return 0;
    });
  }

  res.json(filteredProducts);
});

// GET a single product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// POST a new product
app.post('/products', (req, res) => {
  const newProduct = {
    id: nanoid(), // Generate a unique ID
    ...req.body,
    stock: typeof req.body.stock === 'number' ? req.body.stock : 0, // Ensure stock is a number
    rating: typeof req.body.rating === 'number' ? req.body.rating : 0 // Ensure rating is a number
  };

  const validationError = validateProduct(newProduct);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  products.push(newProduct);
  res.status(201).json(newProduct); // 201 Created
});

// PUT (update) an existing product by ID
app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    const updatedProduct = {
      ...products[productIndex], // Keep existing data
      ...req.body,               // Overlay with new data
      id: productId              // Ensure ID remains the same
    };

    const validationError = validateProduct(updatedProduct);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// DELETE a product by ID
app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  const initialLength = products.length;
  products = products.filter(p => p.id !== productId);

  if (products.length < initialLength) {
    res.status(204).send(); // 204 No Content for successful deletion
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Mock E-commerce Products API running on http://localhost:${PORT}`);
  console.log('Available endpoints: /products, /products/:id');
});
