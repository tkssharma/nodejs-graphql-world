import { Int, Args, Parent, Query, Mutation, Resolver, ResolveField } from '@nestjs/graphql';
import { User, UserInput } from './user.model';
import { UserService } from './user.service';
import { TeamService } from '../teams/team.service';
import { forwardRef, Inject } from '@nestjs/common';
import { Team } from '../teams/team.model';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => TeamService))
    private readonly teamService: TeamService,
  ) { }

  @Query(returns => [User], { name: 'users', nullable: false })
  async getUsers() {
    return this.userService.findAll();
  }

  @Query(returns => User, { name: 'user', nullable: true })
  async getUserById(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.userService.findById(id);
  }

  @Mutation(() => User, { name: 'createUser'})
  async createUser(@Args('data') input: UserInput): Promise<User> {
    return this.userService.createUser(input);
  }

  @ResolveField('teams', () => [Team], {nullable: false})
  async getTeams(@Parent() user: User) {
    return await user.teams;
  }
}
