import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InjectRepository, PrismaRepository } from 'app_modules/prisma';

/**
 * Service for managing article comments.
 */
@Injectable()
export class CommentService {
    update = this.repository.update;
    delete = this.repository.delete;
    findUnique = this.repository.findUnique;
    findMany = this.repository.findMany;

    constructor(
        @InjectRepository('comment')
        private readonly repository: PrismaRepository['comment'],
    ) {}

    async get(args: {
        where: Prisma.ArticleWhereUniqueInput;
        follower?: { id: string };
    }) {
        const parameters: Prisma.CommentFindManyArgs = {
            where: {
                article: args.where,
            },
            orderBy: { commentId: 'desc' },
            include: {
                author: {
                    include: args.follower
                        ? {
                              followers: {
                                  select: { userId: true },
                                  where: { userId: args.follower.id },
                                  take: 1,
                              },
                          }
                        : undefined,
                },
            },
        };
        return this.findMany(parameters);
    }

    async createComment(args: {
        where: Prisma.ArticleWhereUniqueInput;
        body: string;
        authorId: string;
    }) {
        const commentCreateArgs: Prisma.CommentCreateArgs = {
            data: {
                body: args.body,
                author: {
                    connect: { userId: args.authorId },
                },
                article: {
                    connect: args.where,
                },
            },
            include: {
                author: true,
            },
        };
        return this.repository.create(commentCreateArgs);
    }
}
