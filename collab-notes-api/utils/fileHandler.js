import fs from 'fs/promises';

const DB_PATH = './db.json';

export const readData = async () => {
  const data = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(data);
};

export const writeData = async (data) => {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
};
