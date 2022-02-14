import { Injectable, NotFoundException } from '@nestjs/common';
import { AddArticleInput } from './dto/add-article.input';
import { GetArticlesArgs } from './dto/get-articles.args';
import { ArticleEntity } from './article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async create(data: AddArticleInput): Promise<ArticleEntity> {
    const { title, content, accountId } = data;

    const article = this.articleRepository.create({
      title,
      content,
      accountId,
    });
    await this.articleRepository.insert(article);
    return article;
  }

  async findOneById(id: string): Promise<ArticleEntity> {
    const article = await this.articleRepository.findOne(id);
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }

  async findAll(args: GetArticlesArgs): Promise<ArticleEntity[]> {
    const { accountId } = args;

    const queryBuilder = this.articleRepository.createQueryBuilder('article');
    if (accountId) {
      queryBuilder.andWhere('article.accountId = :accountId', { accountId });
    }

    const articleList = await queryBuilder.getMany();
    return articleList;
  }

  async remove(id: string): Promise<boolean> {
    await this.articleRepository.delete(id);
    return true;
  }
}
