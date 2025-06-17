const rateLimitWindowMs = 15 * 60 * 1000; // 15 minutes
const maxRequests = 100;

const memoryStore = new Map();

export default function rateLimiter(req, res, next) {
  const key = req.headers['x-user-id'] || req.ip;
  const currentTime = Date.now();

  const requestData = memoryStore.get(key) || {
    count: 0,
    startTime: currentTime
  };

  if (currentTime - requestData.startTime > rateLimitWindowMs) {
    requestData.count = 1;
    requestData.startTime = currentTime;
  } else {
    requestData.count++;
  }

  memoryStore.set(key, requestData);

  if (requestData.count > maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.'
    });
  }

  next();
}
