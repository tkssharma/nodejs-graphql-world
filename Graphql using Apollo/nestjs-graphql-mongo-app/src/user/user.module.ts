// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService, ...userProviders],
})
export class UserModule {}
