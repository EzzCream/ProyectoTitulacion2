import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { logger } from './log.config.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
	logger.info('Connected to MongoDB');
	logger.info(`----------------------------------------------`);
});

export default mongoose;
