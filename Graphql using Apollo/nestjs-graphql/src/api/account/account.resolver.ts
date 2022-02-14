import { Args, Mutation, Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { AddAccountInput } from './dto/add-account.input';
import { GetAccountsArgs } from './dto/get-accounts.args';
import { AccountEntity } from './account.entity';
import { AccountService } from './account.service';
import { ArticleService } from '../article/article.service';
import { ArticleEntity } from '../article/article.entity';

@Resolver(of => AccountEntity)
export class AccountResolver {
  constructor(private readonly accountService: AccountService, private readonly articleService: ArticleService) {}

  @Query(returns => AccountEntity, { name: 'account' })
  async getAccount(@Args('id') id: string): Promise<AccountEntity> {
    return await this.accountService.findOneById(id);
  }

  @Query(returns => [AccountEntity], { name: 'accounts' })
  async getAccounts(@Args() args: GetAccountsArgs): Promise<AccountEntity[]> {
    return await this.accountService.findAll(args);
  }

  @Mutation(returns => AccountEntity)
  async addAccount(@Args('data') data: AddAccountInput): Promise<AccountEntity> {
    return await this.accountService.create(data);
  }

  @Mutation(returns => Boolean)
  async delAccount(@Args('id') id: string) {
    return await this.accountService.remove(id);
  }

  @ResolveProperty('articles', () => [ArticleEntity])
  async getArticles(@Parent() account: AccountEntity): Promise<ArticleEntity[]> {
    const { id } = account;
    return await this.articleService.findAll({ accountId: id });
  }
}
