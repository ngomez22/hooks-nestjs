import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RawBodyMiddleware } from './middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(RawBodyMiddleware).forRoutes('*');
  }
}
