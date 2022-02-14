// src/user/user.resolver.ts
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './user.input';
import { UserService } from '../user/user.service';
import { User } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Query(() => [User])
  async users() {
    return this.userService.find();
  }
}
