import { ArticleWhereUniqueInput } from '@generated/article/article-where-unique.input';
import { CommentWhereUniqueInput } from '@generated/comment/comment-where-unique.input';
import { Inject, UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { CurrentUser } from 'app_modules/current-user-decorator';
import {
    GraphqlFields,
    GraphqlFieldsParameter,
} from 'app_modules/nestjs-graphql-fields';
import {
    GraphqlAuthGuard,
    OptionalGraphqlAuthGuard,
} from 'app_modules/nestjs-passport-graphql-auth-guard';
import { GraphQLResolveInfo } from 'graphql';

import { ArticleService } from '../article/article.service';
import { PassportUserFields } from '../types';
import { AuthorGuard } from './author.guard';
import { CommentService } from './comment.service';
import { Comment } from './models/comment.model';
import { CreateCommentInput } from './models/create-comment.input';

/**
 * Resolver for article comment type.
 */
@Resolver(() => Comment)
export class CommentResolver {
    constructor(
        private readonly commentService: CommentService,
        private readonly articleService: ArticleService,
        @Inject('PUB_SUB') private readonly pubSub: PubSub,
    ) {}

    @Query(() => [Comment])
    @UseGuards(OptionalGraphqlAuthGuard)
    async articleComments(
        @Args('where') where: ArticleWhereUniqueInput,
        @CurrentUser() currentUser: PassportUserFields,
    ) {
        await this.articleService.findUnique({ where, rejectOnNotFound: true });
        return this.commentService.get({ where, follower: currentUser });
    }

    @Mutation(() => Comment)
    @UseGuards(GraphqlAuthGuard)
    async createComment(
        @Args('data') data: CreateCommentInput,
        @Args('where') where: ArticleWhereUniqueInput,
        @CurrentUser() currentUser: PassportUserFields,
        @GraphqlFields() graphqlFields: GraphqlFieldsParameter,
    ) {
        console.log('graphqlFields', graphqlFields);
        await this.articleService.findUnique({ where, rejectOnNotFound: true });
        const comment = await this.commentService.createComment({
            where,
            body: data.body,
            authorId: currentUser.id,
        });
        await this.pubSub.publish('commentAdded', { commentAdded: comment });
        return comment;
    }

    @Mutation(() => Comment)
    @UseGuards(GraphqlAuthGuard, AuthorGuard)
    async deleteComment(@Args('where') where: CommentWhereUniqueInput) {
        return this.commentService.delete({ where });
    }

    @Subscription(() => Comment)
    commentAdded() {
        return this.pubSub.asyncIterator('commentAdded');
    }
}
