import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.database-repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  imports: [AuthModule],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
