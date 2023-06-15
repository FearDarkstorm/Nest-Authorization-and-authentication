 import { Controller,Get } from "@nestjs/common";
 import { UseGuards } from "@nestjs/common/decorators";
 import { AuthGuard } from "@nestjs/passport/dist";

 @Controller()
 export class AppController {
    constructor() {

    }
  
@UseGuards(AuthGuard('jwt'))
@Get('/')
login(): string {
    return 'login route';
}


 }