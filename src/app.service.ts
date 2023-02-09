import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getIndex(): Promise<any> {
    const { data } = await lastValueFrom(this.httpService.get('/index'));
    return data;
  }
}
