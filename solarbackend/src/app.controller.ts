import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { seconds, Throttle } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Throttle({ default: { limit: 15, ttl: seconds(5) } })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
