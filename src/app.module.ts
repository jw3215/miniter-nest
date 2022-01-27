import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TweetsModule, ProductsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
