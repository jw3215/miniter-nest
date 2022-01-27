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

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login/')
  login(@Body() loginRequestDto: LoginRequestDto) {
    return this.authService.jwtLogIn(loginRequestDto);
  }

  @Get('logout/')
  logout() {
    return this.usersService.logout();
  }

  @Post('follow/')
  follow(@Body() followUserDto: FollowUserDto) {
    return this.usersService.follow(followUserDto);
  }

  @Post('unfollow/')
  unFollow(@Body() followUserDto: FollowUserDto) {
    return this.usersService.unFollow(followUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
