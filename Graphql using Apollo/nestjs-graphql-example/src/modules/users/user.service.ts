import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { TeamService } from '../teams/team.service';

import { User, UserInput } from './user.model';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => TeamService))
    private readonly teamService: TeamService,
  ) {}

  findAll() {
    return this.userRepository.find({
      relations: [ 'teams' ],
    });
  }

  findById(id: number) {
    return this.userRepository.findOne({ id }, {
      relations: [ 'teams' ],
    });
  }

  async createUser( data: UserInput ) {
    const user = await this.userRepository.save(
      this.userRepository.create(data)
    );
    if(data.teamId) {
      await this.teamService.addMember(data.teamId, user.id);
    }
    return user;
  }

  findByIds(ids: number[]) {
    return this.userRepository.find({
      where: { id: In(ids) },
      relations: [ 'teams' ],
    });
  }

}
