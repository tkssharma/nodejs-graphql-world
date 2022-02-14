import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserInput } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.findAll();

    return { users };
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    const user = await this.userService.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return { user };
  }

  @Post()
  async createUser(@Body() data: UserInput) {
    const user = await this.userService.createUser(data);
    return { user };
  }
}
