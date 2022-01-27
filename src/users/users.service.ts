import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FollowUserDto } from './dto/follow-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { UserRepository } from './entities/user.memory-repository';
import { UsersRepository } from './users.database-repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  login(query: CreateUserDto) {
    const email = query.email;
    const password = query.password;
    return `action returns login${email} ${password}`;
  }

  logout() {
    return 'this action returns logout';
  }

  follow(followUserDto: FollowUserDto) {
    const temp = [followUserDto.userId, followUserDto.userIdToFollow];
    return temp;
  }

  unFollow(followUserDto: FollowUserDto) {
    const temp = [
      followUserDto.userId,
      followUserDto.userIdToFollow,
      'unfollow',
    ];
    return temp;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    this.userRepository.remove(id);
  }
}
