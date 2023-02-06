import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(url: string, ip: string): string {
    return `This is ${url} for ${ip}`;
  }
}
