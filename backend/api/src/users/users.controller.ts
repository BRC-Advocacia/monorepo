import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register') // /users/register
  async register(@Body() user: Partial<User>): Promise<User> {

    return await this.usersService.create(user);
  }

  @Get(':username') // /users/:username (unique)
  async findOne(
    @Param('username') username: string,
  ): Promise<User> {
    return await this.usersService.findOne(username);
  }

  @Get() // /users
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
