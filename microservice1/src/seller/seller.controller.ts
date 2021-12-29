import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SellerService } from './seller.service';

@Controller()
export class SellerController {
    constructor(private sellerService: SellerService) {}

    @MessagePattern({ cmd: 'getSeller' })
    getSeller(){
        console.log('5523621');
        
        const seller = this.sellerService.getSeller();
        return seller;
    }
}