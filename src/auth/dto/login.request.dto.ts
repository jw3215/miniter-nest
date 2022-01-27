import { PickType } from '@nestjs/mapped-types';
import { UserEntity } from 'src/users/entities/user.entity';

export class LoginRequestDto extends PickType(UserEntity, [
  'email',
  'password',
] as const) {}
