import { Module, forwardRef } from '@nestjs/common';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';
import { DateScalar } from 'src/common/scalars/date.scalar';
import { AccountModule } from '../account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity]), forwardRef(() => AccountModule)],
  providers: [ArticleService, ArticleResolver, DateScalar],
  exports: [ArticleService],
})
export class ArticleModule {}
