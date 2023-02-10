import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getIndex(country: string): Promise<any> {
    const { data } = await lastValueFrom(
      this.httpService.get(`/${country}/index`),
    );
    return data;
  }
}
