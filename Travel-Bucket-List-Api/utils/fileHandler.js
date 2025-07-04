import { readFile, writeFile } from 'fs/promises';

export const readData = async (path) => {
  try {
    const data = await readFile(path, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

export const writeData = async (path, data) => {
  await writeFile(path, JSON.stringify(data, null, 2));
};
