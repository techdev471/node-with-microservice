import { Module } from "@nestjs/common";
import { SellerController } from "./seller.controller";

@Module({
    imports: [

    ],
    controllers: [ SellerController ],
})
export class SellerModule{}