import db from '../config/db.js';
import { nanoid } from 'nanoid';

export const saveLog = async (logData) => {
  const newLog = {
    id: nanoid(),
    source: logData.source,
    level: logData.level,
    message: logData.message,
    meta: logData.meta || {},
    timestamp: new Date().toISOString()
  };

  db.data.logs.push(newLog);
  await db.write();
  return newLog;
};

export const getLogs = async (filters) => {
  let logs = db.data.logs;

  if (filters.level) logs = logs.filter(l => l.level === filters.level);
  if (filters.source) logs = logs.filter(l => l.source === filters.source);

  return logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
};
