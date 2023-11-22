import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GlobalCacheModule } from './configs/cache.config';

@Module({
  imports: [GlobalCacheModule, AnimalModule],
  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
