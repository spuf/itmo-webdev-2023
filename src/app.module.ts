import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule.forRoot({
      connectionURI: process.env.SUPERTOKENS_URI,
      apiKey: process.env.SUPERTOKENS_KEY,
      appInfo: {
        appName: 'project-name',
        apiDomain: process.env.ORIGIN,
        websiteDomain: process.env.ORIGIN,
        apiBasePath: '/api',
        websiteBasePath: '/auth',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
