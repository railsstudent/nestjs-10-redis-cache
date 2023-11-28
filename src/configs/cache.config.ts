import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-ioredis-yet';
import { RedisOptions } from 'ioredis';
import { env } from './env.config';

// https://github.com/dabroek/node-cache-manager-redis-store/issues/40
export const globalCacheConfig = CacheModule.register<RedisOptions>({
  store: redisStore,
  host: env.REDIS.HOST,
  port: env.REDIS.PORT,
  ttl: env.REDIS.TTL,
  isGlobal: true,
});
