import env from 'dotenv';
env.config();

export const PORT = process.env.PORT || 8080;
export const MONGO_LOCAL = process.env.MONGO_LOCAL;
export const SECRET_KEY = process.env.SECRET_KEY;