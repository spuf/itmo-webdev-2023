import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule.forRoot({
      connectionURI:
        'https://dev-a5027e51ddd511eda055f1cdfed2bc53-eu-west-1.aws.supertokens.io:3568',
      apiKey: '709WXJH1i6kYhPZXip3woreRc3o4MG',
      appInfo: {
        appName: 'project-name',
        apiDomain: 'http://localhost:3000',
        websiteDomain: 'http://localhost:3000',
        apiBasePath: '/api',
        websiteBasePath: '/auth',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
