import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex(@Headers('country') country: string): Promise<any> {
    return this.appService.getIndex(country);
  }
}
