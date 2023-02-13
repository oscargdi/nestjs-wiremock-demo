import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getTransactionsByUserId(
    country: string,
    userId: string,
    status: string,
  ): Promise<any> {
    const { data } = await lastValueFrom(
      this.httpService.get(`/${userId}/items`, {
        headers: { country: country },
        params: { status: status },
      }),
    );
    return data;
  }
}
