import { Module } from '@nestjs/common';
import { PrismaModule } from 'app_modules/prisma';

import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';

@Module({
    imports: [PrismaModule],
    providers: [TagResolver, TagService],
    exports: [TagService],
})
export class TagModule {}
