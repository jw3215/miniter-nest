import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserRepository {
  id: number = 0;
  users = [];

  create(createUserDto: CreateUserDto) {
    const user = {
      email: createUserDto.email,
      password: createUserDto.password,
      name: createUserDto.name,
      profile: createUserDto.profile,
      id: ++this.id,
    };
    this.users.push(user);

    return user;
  }
}
