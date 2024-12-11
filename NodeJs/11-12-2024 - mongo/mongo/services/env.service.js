
import env from 'dotenv';
env.config();

export const PORT = process.env.PORT || 8181;
export const MONGO_LOCAL = process.env.MONGO_LOCAL;

