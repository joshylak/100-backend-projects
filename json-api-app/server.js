const express = require('express');
const db = require('./database'); // Our database module

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

// --- API Endpoints ---

// CREATE: Add a new item
app.post('/items', async (req, res) => {
  try {
    const newItemData = req.body;
    if (!newItemData || Object.keys(newItemData).length === 0) {
      return res.status(400).json({ message: 'Bad Request: Item data cannot be empty.' });
    }
    // You might add more specific validation here (e.g., checking for required fields)
    // if (!newItemData.name || !newItemData.price) {
    //   return res.status(400).json({ message: 'Missing required fields: name and price.' });
    // }

    const addedItem = await db.addItem(newItemData);
    res.status(201).json({ message: 'Item added successfully', item: addedItem });
  } catch (error) {
    console.error('Error in POST /items:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// READ: Get all items
app.get('/items', async (req, res) => {
  try {
    const allItems = await db.getAllItems();
    res.status(200).json(allItems);
  } catch (error) {
    console.error('Error in GET /items:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// READ: Get a single item by ID
app.get('/items/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await db.getItemById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(`Error in GET /items/${req.params.id}:`, error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// UPDATE: Update an existing item by ID
app.put('/items/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'Bad Request: Update data cannot be empty.' });
    }

    const updatedItem = await db.updateItem(itemId, updates);
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item updated successfully', item: updatedItem });
  } catch (error) {
    console.error(`Error in PUT /items/${req.params.id}:`, error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// DELETE: Delete an item by ID
app.delete('/items/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const deleted = await db.deleteItem(itemId);
    if (!deleted) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
    // Some APIs return 204 No Content on successful deletion and don't send a body
    // res.status(204).send();
  } catch (error) {
    console.error(`Error in DELETE /items/${req.params.id}:`, error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log("API Endpoints:");
  console.log(`  POST   /items         - Create a new item`);
  console.log(`  GET    /items         - Retrieve all items`);
  console.log(`  GET    /items/:id     - Retrieve a single item by its ID`);
  console.log(`  PUT    /items/:id     - Update an existing item by its ID`);
  console.log(`  DELETE /items/:id     - Delete an item by its ID`);
});