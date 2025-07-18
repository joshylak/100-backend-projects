    import dotenv from 'dotenv';
    dotenv.config(); // Load .env here just to be safe (redundant but safe fallback)

    import express from 'express';
    import { createProxyMiddleware } from 'http-proxy-middleware';
    import { verifyToken } from '../middlewares/auth.middleware.js';

    console.log('🚧 SERVICE_USER_URL:', process.env.SERVICE_USER_URL); // debug log
    console.log('🚧 SERVICE_ORDER_URL:', process.env.SERVICE_ORDER_URL); // debug log

    const router = express.Router();

    router.use('/public', createProxyMiddleware({
    target: process.env.SERVICE_USER_URL,
    changeOrigin: true,
    }));

    router.use('/order', verifyToken, createProxyMiddleware({
    target: process.env.SERVICE_ORDER_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/order': '',
    },
    }));

    export default router;
