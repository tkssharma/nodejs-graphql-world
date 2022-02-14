import { Module } from '@nestjs/common';

import { ArticleModule } from '../article/article.module';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';

@Module({
    imports: [ArticleModule],
    providers: [CommentService, CommentResolver],
})
export class CommentModule {}
