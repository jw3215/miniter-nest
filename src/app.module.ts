import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { Logger1Middleware } from './logger1.middleware';

@Module({
  imports: [UsersModule, TweetsModule, ProductsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger1Middleware).forRoutes('ping/');
  }
}
