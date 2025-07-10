import { v4 as uuidv4 } from 'uuid';
import { readDB, writeDB } from '../utils/fileHandler.js';

const DB_PATH = './db/notifications.json';

export const getAllNotifications = (req, res) => {
    const notifications = readDB(DB_PATH);
    res.status(200).json(notifications);
};

export const sendNotification = (req, res) => {
    const { title, message, recipient } = req.body;

if (!title || !message || !recipient) {
    return res.status(400).json({ error: "All fields are required" });
    }

const notifications = readDB(DB_PATH);

const newNotification = {
    id: uuidv4(),
    title,
    message,
    recipient,
    isRead: false,
    createdAt: new Date().toISOString()
    };

    notifications.push(newNotification);
    writeDB(DB_PATH, notifications);

    res.status(201).json({ message: "Notification sent", notification: newNotification });
};

export const markAsRead = (req, res) => {
    const { id } = req.params;
    let notifications = readDB(DB_PATH);
    const index = notifications.findIndex(n => n.id === id);

if (index === -1) {
    return res.status(404).json({ error: "Notification not found" });
    }

    notifications[index].isRead = true;
    writeDB(DB_PATH, notifications);

    res.status(200).json({ message: "Marked as read", notification: notifications[index] });
};
