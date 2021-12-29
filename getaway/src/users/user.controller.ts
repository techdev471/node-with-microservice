import { Controller, Get, Logger, Response } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Controller('user')
export class UserController {

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
    async getUser(@Response() res){
        this.logger.log("Getting user")
        const pattern = {cmd : "getUser"};
        const data = await this.client.send(pattern,{message: "Hello From gateway."}).toPromise();
        return res.json(data)
    }
}
