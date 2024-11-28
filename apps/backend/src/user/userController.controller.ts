import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserProvider } from './userProvider.provider';
import { IUser, User } from '@acolhe/core';

@Controller('api/user')
export class UserController {
  constructor(private readonly repo: UserProvider) {}

  @Get()
  async getAllUsers(): Promise<IUser[]> {
    const user = new User(this.repo);
    try {
      return await user.getAllUsers();
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  @Get('byName:name')
  async getUserByName(@Param('name') name: string): Promise<IUser> {
    const user = new User(this.repo);
    try {
      return await user.getUserByName(name);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  @Get('byId:id')
  async getUserById(@Param('id') id: number): Promise<IUser | undefined> {
    const user = new User(this.repo);
    try {
      return await user.getUserById(id);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  @Post()
  async createUser(@Body() user: IUser): Promise<void> {
    const userProvider = new User(this.repo);
    try {
      await userProvider.createUser(user);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    const user = new User(this.repo);
    try {
      await user.deleteUser(id);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }
}
