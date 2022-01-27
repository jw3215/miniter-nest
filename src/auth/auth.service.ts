import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersRepository } from 'src/users/users.database-repository';
import { LoginRequestDto } from './dto/login.request.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;

    const user = await this.usersRepository.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    if (password !== user.password) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }
  
    const payload = { email: email, id: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
