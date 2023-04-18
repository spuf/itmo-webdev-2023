import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { AuthGuard } from './auth/auth.guard';
import { Session } from './auth/session.decorator';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Req() request: Request): string {
    return this.appService.getHello(request.url, request.ip);
  }

  @Get('test')
  @UseGuards(new AuthGuard())
  async getTest(@Session() session: SessionContainer): Promise<string> {
    return 'authorized';
  }
}
