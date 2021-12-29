import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    async getUser() {
        const user = {name : "Ravi Chauhan"};
        return user
    }
}