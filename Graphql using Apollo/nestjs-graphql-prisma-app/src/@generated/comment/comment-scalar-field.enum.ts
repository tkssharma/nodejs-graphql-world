import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    commentId = 'commentId',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    body = 'body',
    authorId = 'authorId',
    articleId = 'articleId',
}

registerEnumType(CommentScalarFieldEnum, {
    name: 'CommentScalarFieldEnum',
    description: undefined,
});
