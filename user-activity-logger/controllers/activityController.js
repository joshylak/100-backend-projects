import { activityLogs } from '../db/dummyDB.js';

export const logActivity = async (req, res) => {
  const { userId, action, metadata } = req.body;

  if (!userId || !action) {
    return res.status(400).json({ error: 'userId and action are required.' });
  }

  const log = {
    id: activityLogs.length + 1,
    userId,
    action,
    metadata: metadata || {},
    timestamp: new Date().toISOString(),
  };

  activityLogs.push(log);
  res.status(201).json({ message: 'Activity logged.', log });
};

export const getAllActivities = async (req, res) => {
  res.json(activityLogs);
};

export const getActivitiesByUser = async (req, res) => {
  const { userId } = req.params;
  const userLogs = activityLogs.filter(log => log.userId === userId);
  res.json(userLogs);
};