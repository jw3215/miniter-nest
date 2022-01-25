import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FollowUserDto } from './dto/follow-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './entities/user.memory-repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  create(createUserDto: CreateUserDto) {
    const user = {
      email: createUserDto.email,
      password: createUserDto.password,
      name: createUserDto.name,
      profile: createUserDto.profile,
      id: ++this.userRepository.id,
    };
    this.userRepository.users.push(user);
    // console.log(this.userRepository.a)
    return user;
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
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
