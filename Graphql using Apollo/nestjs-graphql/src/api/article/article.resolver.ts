import { Args, Mutation, Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';
import { GetArticlesArgs } from './dto/get-articles.args';
import { AddArticleInput } from './dto/add-article.input';
import { AccountEntity } from '../account/account.entity';
import { AccountService } from '../account/account.service';

@Resolver(of => ArticleEntity)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService, private readonly accountService: AccountService) {}

  @Query(returns => ArticleEntity, { name: 'article' })
  async getArticle(@Args('id') id: string): Promise<ArticleEntity> {
    return await this.articleService.findOneById(id);
  }

  @Query(returns => [ArticleEntity], { name: 'articles' })
  async getArticles(@Args() args: GetArticlesArgs): Promise<ArticleEntity[]> {
    return await this.articleService.findAll(args);
  }

  @Mutation(returns => ArticleEntity)
  async addArticle(@Args('data') data: AddArticleInput): Promise<ArticleEntity> {
    return await this.articleService.create(data);
  }

  @Mutation(returns => Boolean)
  async delArticle(@Args('id') id: string) {
    return await this.articleService.remove(id);
  }

  @ResolveProperty('account', () => AccountEntity)
  async getAccount(@Parent() article: ArticleEntity): Promise<AccountEntity> {
    const { accountId } = article;
    return await this.accountService.findOneById(accountId);
  }
}
