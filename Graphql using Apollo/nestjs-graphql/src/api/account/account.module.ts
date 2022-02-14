import { Module, forwardRef } from '@nestjs/common';
import { ArticleModule } from '../article/article.module';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';
import { DateScalar } from 'src/common/scalars/date.scalar';
import { AccountEntity } from './account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity]), forwardRef(() => ArticleModule)],
  providers: [AccountService, AccountResolver, DateScalar],
  exports: [AccountService],
})
export class AccountModule {}
