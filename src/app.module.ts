import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnimalModule } from './animal/animal.module';
import { AppController } from './app.controller';
import { GlobalCacheModule } from './configs/cache.config';
import redisConfig from './configs/redis.config';

@Module({
  imports: [
    GlobalCacheModule,
    AnimalModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [redisConfig],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
