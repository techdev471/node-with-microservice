import { Controller, Get, Logger, Response } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Controller('seller')
export class SellerController {

    client: ClientProxy;
    logger = new Logger("Magazines");
    constructor() {
        this.client = ClientProxyFactory.create({
        transport: Transport.REDIS,
        options: {
            url: "redis://127.0.0.1:6379",
        },
        });
    }

    @Get()
    async getSeller(@Response() res){
        const data = await this.client.send({cmd : "getSeller"},{}).toPromise();
        return res.json(data)
    }
}
