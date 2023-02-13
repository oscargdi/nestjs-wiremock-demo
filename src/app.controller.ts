import { Controller, Get, Headers, Param, Query } from '@nestjs/common';
import { ApiHeader, ApiParam, ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:userId')
  @ApiHeader({ name: 'country', description: 'Country', example: 'CO' })
  @ApiParam({
    name: 'userId',
    type: String,
    example: '0cf82ca5-e6b5-4757-b887-0a61e0f5871a',
  })
  @ApiQuery({
    name: 'status',
    type: String,
    example: 'pending',
  })
  getIndex(
    @Headers('country') country: string,
    @Param('userId') userId: string,
    @Query('status') status: string,
  ): Promise<any> {
    return this.appService.getTransactionsByUserId(country, userId, status);
  }
}
