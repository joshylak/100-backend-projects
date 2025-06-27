import knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../knexfile.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Knex
const db = knex(knexConfig.development);

// Bind to objection
Model.knex(db);

// ✅ Set modelPaths to help Objection resolve file paths in relationMappings
Model.modelPaths = [path.join(__dirname, '..', 'models')];

export default db;
