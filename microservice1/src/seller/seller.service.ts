import { Injectable } from "@nestjs/common";

@Injectable()
export class SellerService {
    async getSeller() {
        console.log("getSeller");
        
        const seller = {name : "Ravi Chauhan : Seller"};
        console.log(seller);
        return seller;
    }
}