import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisClientOptions } from 'redis';
import { env } from './env.config';

// https://github.com/dabroek/node-cache-manager-redis-store/issues/40
export const GlobalCacheModule = CacheModule.register<RedisClientOptions>({
  store: redisStore,
  socket: {
    host: env.REDIS.HOST,
    port: env.REDIS.PORT,
  },
  ttl: env.REDIS.TTL,
  isGlobal: true,
});
