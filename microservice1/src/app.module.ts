import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellerController } from './seller/seller.controller';
import { SellerService } from './seller/seller.service';

@Module({
  imports: [],
  controllers: [AppController, SellerController],
  providers: [AppService, SellerService],
})
export class AppModule {}
