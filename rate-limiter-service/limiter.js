import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimiter',
  points: 10, // 10 requests
  duration: 60 // per 60 seconds
});

export const checkRateLimit = async (key) => {
  try {
    await limiter.consume(key); // key can be IP, userId, or API key
    return { allowed: true };
  } catch (rejRes) {
    return {
      allowed: false,
      retryAfter: Math.round(rejRes.msBeforeNext / 1000)
    };
  }
};
