import { Controller, Get } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UserService } from "./user.service";

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @MessagePattern({ cmd: 'getUser' })
    getUser() {
        const users = this.userService.getUser();
        console.log(users);
        return users;
    }

}