import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createMockRecord, applyValueFromSpec } from './utils.mjs';
import { faker } from '@faker-js/faker';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Load all .schema.json files from folder and register routes on the provided Express app.
 * Schema format (example below): fields with either {"faker":"name.firstName"} or {"type":"number","min":1,"max":10} or {"type":"uuid"}.
 */
export async function generateRoutesFromSchemas(app, schemasDir = './schemas') {
  const absDir = path.isAbsolute(schemasDir) ? schemasDir : path.join(__dirname, schemasDir);
  let files;
  try {
    files = await fs.readdir(absDir);
  } catch (err) {
    console.error('Could not read schemas directory', absDir, err);
    return;
  }

  for (const file of files.filter(f => f.endsWith('.schema.json'))) {
    const full = path.join(absDir, file);
    try {
      const raw = await fs.readFile(full, 'utf8');
      const schema = JSON.parse(raw);
      registerRoutesForSchema(app, schema);
      console.log(`Loaded schema: ${file} -> endpoint ${schema.endpoint}`);
    } catch (err) {
      console.error(`Error loading schema ${file}:`, err.message);
    }
  }
}

function registerRoutesForSchema(app, schema) {
  const { endpoint, name, count = 10, fields = {}, idField = 'id', methods = ['GET','POST','PUT','DELETE'] } = schema;

  if (!endpoint) {
    console.warn('Schema missing endpoint', schema);
    return;
  }

  // In-memory store: Map of id -> record
  const store = new Map();

  // Seed initial data
  for (let i = 0; i < count; i++) {
    const record = createMockRecord(fields);
    // ensure id
    if (!record[idField]) record[idField] = faker.string.uuid();
    store.set(record[idField], record);
  }

  // GET list with optional ?_limit&_page
  app.get(endpoint, (req, res) => {
    const arr = Array.from(store.values());
    // simple pagination
    const _limit = parseInt(req.query._limit || req.query.limit) || 50;
    const _page = parseInt(req.query._page || req.query.page) || 1;
    const start = (_page - 1) * _limit;
    const paged = arr.slice(start, start + _limit);
    res.json({
      meta: { total: arr.length, page: _page, limit: _limit },
      data: paged
    });
  });

  // GET by id
  app.get(`${endpoint}/:${idField}`, (req, res) => {
    const id = req.params[idField];
    const item = store.get(id);
    if (!item) return res.status(404).json({ error: `${name || endpoint} not found` });
    res.json(item);
  });

  // POST create
  if (methods.includes('POST')) {
    app.post(endpoint, (req, res) => {
      const body = req.body || {};
      // build record: prefer body values, fallback to mock generator
      const record = {};
      for (const key of Object.keys(fields)) {
        record[key] = body[key] !== undefined ? body[key] : applyValueFromSpec(fields[key]);
      }
      if (!record[idField]) record[idField] = faker.string.uuid();
      store.set(record[idField], record);
      res.status(201).json(record);
    });
  }

  // PUT update (replace)
  if (methods.includes('PUT')) {
    app.put(`${endpoint}/:${idField}`, (req, res) => {
      const id = req.params[idField];
      if (!store.has(id)) return res.status(404).json({ error: 'Not found' });
      const body = req.body || {};
      const updated = { ...store.get(id), ...body, [idField]: id };
      store.set(id, updated);
      res.json(updated);
    });
  }

  // DELETE
  if (methods.includes('DELETE')) {
    app.delete(`${endpoint}/:${idField}`, (req, res) => {
      const id = req.params[idField];
      if (!store.has(id)) return res.status(404).json({ error: 'Not found' });
      store.delete(id);
      res.status(204).send();
    });
  }
}
