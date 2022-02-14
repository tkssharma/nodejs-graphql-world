import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InjectRepository, PrismaRepository } from 'app_modules/prisma';

/**
 * Service for manage tags.
 */
@Injectable()
export class TagService {
    constructor(
        @InjectRepository('tag') private readonly repository: PrismaRepository['tag'],
    ) {}

    /**
     * Create tags (if not exists) from array of strings.
     */
    async createTags(tags: string[]) {
        const upsertOperations = tags.map(name => {
            return this.repository.upsert({
                where: { name },
                create: { name },
                update: {},
            });
        });
        return Promise.all(upsertOperations);
    }

    findMany(args?: Prisma.TagFindManyArgs) {
        return this.repository.findMany(args);
    }
}
