import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LocationModule } from './modules';
import { HttpExceptionFilter } from './filters';
import { LoggingMiddleware } from './middleware';
import { typeormConfig } from '../database/config';
import { ResponseFormattingInterceptor } from './interceptors';

@Module({
  imports: [LocationModule, TypeOrmModule.forRoot(typeormConfig)],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseFormattingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
