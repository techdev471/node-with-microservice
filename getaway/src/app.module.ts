import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellerController } from './sellers/seller.controller';
import { UserController } from './users/user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, SellerController],
  providers: [AppService],
})
export class AppModule {}
