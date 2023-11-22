import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalCacheModule } from './configs/cache.config';

@Module({
  imports: [GlobalCacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
