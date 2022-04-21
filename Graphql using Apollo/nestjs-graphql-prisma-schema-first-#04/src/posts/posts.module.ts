import { Module } from '@nestjs/common';
import { PostResolvers } from './posts.resolvers';
import { PostService } from './posts.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PostResolvers, PostService, PrismaService],
})
export class PostModule {}