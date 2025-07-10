import { readFileSync, writeFileSync } from 'fs';

export const readDB = (path) => {
    const data = readFileSync(path);
    return JSON.parse(data);
};

export const writeDB = (path, data) => {
    writeFileSync(path, JSON.stringify(data, null, 2));
};
