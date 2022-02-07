import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FollowUserDto } from './dto/follow-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '회원 가입' })
  @Post()
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login/')
  login(@Body() loginRequestDto: LoginRequestDto) {
    return this.authService.jwtLogIn(loginRequestDto);
  }

  @ApiOperation({ summary: '로그아웃' })
  @Get('logout/')
  logout() {
    return this.usersService.logout();
  }

  @ApiOperation({ summary: '팔로우' })
  @Post('follow/')
  follow(@Body() followUserDto: FollowUserDto) {
    return this.usersService.follow(followUserDto);
  }

  @ApiOperation({ summary: '언팔로우' })
  @Post('unfollow/')
  unFollow(@Body() followUserDto: FollowUserDto) {
    return this.usersService.unFollow(followUserDto);
  }

  @ApiOperation({ summary: '모든 유저 조회' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: '특정 유저 조회' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: '유저 정보 갱신' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: '회원 탈퇴' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
