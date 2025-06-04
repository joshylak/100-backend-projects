const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dbPath = path.join(__dirname, 'db.json');

/**
 * Writes the given data (array of items) to the JSON database file.
 * @param {Array} data The array of items to write.
 * @returns {Promise<void>}
 */
async function writeDB(data) {
  try {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error("Error writing to database:", error);
    throw new Error("Could not write to database."); // Propagate a generic error
  }
}

/**
 * Reads the current data from the JSON database file.
 * Ensures an array is returned, handling empty, non-existent, or malformed files.
 * @returns {Promise<Array>} The parsed JSON data as an array of items.
 */
async function readDB() {
  try {
    const fileContent = await fs.readFile(dbPath, 'utf8');
    if (!fileContent.trim()) {
      return []; // File is empty or contains only whitespace
    }
    const parsedData = JSON.parse(fileContent);
    if (!Array.isArray(parsedData)) {
      console.warn(`Warning: Content of db.json was not an array. Re-initializing db.json.`);
      await writeDB([]); // Reset the file to an empty array
      return [];
    }
    return parsedData;
  } catch (error) {
    if (error.code === 'ENOENT') { // File doesn't exist
      await writeDB([]); // Create/initialize with an empty array
      return [];
    }
    if (error instanceof SyntaxError) { // File content is not valid JSON
      console.error("Error parsing db.json: Invalid JSON content. Re-initializing db.json.");
      await writeDB([]); // Reset the file
      return [];
    }
    console.error("Error reading database:", error);
    throw new Error("Could not read from database."); // Propagate a generic error
  }
}

// --- CRUD Operations ---

/**
 * Adds a new item to the database.
 * @param {object} itemData The item data to add (without an ID).
 * @returns {Promise<object>} The added item with a new ID.
 */
async function addItem(itemData) {
  const db = await readDB();
  const newItem = { id: uuidv4(), ...itemData };
  db.push(newItem);
  await writeDB(db);
  return newItem;
}

/**
 * Gets all items from the database.
 * @returns {Promise<Array>} All items.
 */
async function getAllItems() {
  return await readDB();
}

/**
 * Gets an item by its ID.
 * @param {string} id The ID of the item to retrieve.
 * @returns {Promise<object|null>} The found item or null if not found.
 */
async function getItemById(id) {
  const db = await readDB();
  return db.find(item => item.id === id) || null;
}

/**
 * Updates an item by its ID.
 * @param {string} id The ID of the item to update.
 * @param {object} updates The partial data to update the item with.
 * @returns {Promise<object|null>} The updated item or null if not found.
 */
async function updateItem(id, updates) {
  const db = await readDB();
  const itemIndex = db.findIndex(item => item.id === id);
  if (itemIndex === -1) {
    return null; // Item not found
  }
  // Ensure ID is not overwritten and preserve original ID
  db[itemIndex] = { ...db[itemIndex], ...updates, id: id };
  await writeDB(db);
  return db[itemIndex];
}

/**
 * Deletes an item by its ID.
 * @param {string} id The ID of the item to delete.
 * @returns {Promise<boolean>} True if an item was deleted, false if not found.
 */
async function deleteItem(id) {
  let db = await readDB();
  const initialLength = db.length;
  db = db.filter(item => item.id !== id);
  if (db.length === initialLength) {
    return false; // Item not found, nothing deleted
  }
  await writeDB(db);
  return true; // Item was deleted
}

module.exports = {
  addItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};