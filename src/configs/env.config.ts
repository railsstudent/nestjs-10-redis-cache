import dotenv from 'dotenv';

dotenv.config();

console.log(process.env);

export const env = {
  REDIS: {
    HOST: process.env.REDIS_HOST,
    PORT: parseInt(process.env.REDIS_PORT),
    TTL: 1000 * 60 * parseInt(process.env.REDIS_TTL_IN_MINUTES),
  },
};
