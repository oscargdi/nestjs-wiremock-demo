import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getTransactionsByUserId(country: string, userId: string, status: string) {
    return this.httpService
      .get(`/${userId}/items`, {
        headers: { country: country },
        params: { status: status },
      })
      .pipe(map((res) => res.data));
  }
}
