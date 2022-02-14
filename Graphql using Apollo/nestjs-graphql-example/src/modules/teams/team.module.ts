import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './team.model';
import { TeamResolver } from './team.resolver';
import { UserModule } from '../users/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Team ]),
    forwardRef(() => UserModule),
  ],
  providers: [ TeamService, TeamResolver ],
  exports: [ TeamService ],
  controllers: [ TeamController ],
})
export class TeamModule {
}
