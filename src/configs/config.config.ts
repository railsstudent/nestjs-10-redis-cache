import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

export const globalConfigConfig = ConfigModule.forRoot({
  isGlobal: true,
  validationSchema: Joi.object({
    REDIS_HOST: Joi.string(),
    REDIS_PORT: Joi.number(),
    REDIS_TTL: Joi.number(),
  }),
});
