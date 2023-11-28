import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { AppController } from './app.controller';
import { globalCacheConfig } from './configs/cache.config';
import { globalConfigConfig } from './configs/config.config';
import { redisConfig } from './configs/redis.config';

@Module({
  imports: [globalCacheConfig, globalConfigConfig, redisConfig, AnimalModule],
  controllers: [AppController],
})
export class AppModule {}
