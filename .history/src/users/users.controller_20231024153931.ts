/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from 'src/models/user';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }
}
