import express from 'express';
import morgan from 'morgan';
import { config } from './config/env.js';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', routes);

app.use(errorHandler);

export default app;
