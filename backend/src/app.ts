import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import packageRoutes from './routes/packageRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/packages', packageRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
