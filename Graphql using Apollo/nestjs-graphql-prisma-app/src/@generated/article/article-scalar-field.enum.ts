import { registerEnumType } from '@nestjs/graphql';

export enum ArticleScalarFieldEnum {
    articleId = 'articleId',
    slug = 'slug',
    title = 'title',
    description = 'description',
    body = 'body',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    favoritesCount = 'favoritesCount',
    authorId = 'authorId',
}

registerEnumType(ArticleScalarFieldEnum, {
    name: 'ArticleScalarFieldEnum',
    description: undefined,
});
