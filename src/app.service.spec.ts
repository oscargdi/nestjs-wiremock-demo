import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  const nock = require('nock');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return valid response', () => {
    nock('http://localhost')
      .get('/12345/items')
      .query({ status: 'pending' })
      .reply(200, { message: 'hello' });

    service
      .getTransactionsByUserId('co', '12345', 'pending')
      .subscribe((res) => {
        expect(res).toEqual({ message: 'hello' });
      });
  });
});
