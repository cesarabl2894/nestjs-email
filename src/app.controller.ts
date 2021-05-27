import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('signin')
  signIn(): boolean {
    console.log(join(__dirname, 'templates'));
    // return true;
    return this.appService.sendEmail();
  }
}
