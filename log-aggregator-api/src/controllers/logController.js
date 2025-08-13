import { saveLog, getLogs } from '../services/logService.js';

export const createLog = async (req, res) => {
  try {
    const saved = await saveLog(req.body);
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const fetchLogs = async (req, res) => {
  try {
    const logs = await getLogs(req.query);
    res.status(200).json({ success: true, data: logs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
