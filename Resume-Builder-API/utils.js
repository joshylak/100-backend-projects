import { readFile, writeFile } from 'fs/promises';

const DB_PATH = './db.json';

export async function readDB() {
  const data = await readFile(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

export async function writeDB(data) {
  await writeFile(DB_PATH, JSON.stringify(data, null, 2));
}
