import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';
import { UserUpdateManyWithoutFollowingInput } from './user-update-many-without-following.input';

@InputType()
export class UserUpdateWithoutFollowingInput {
    @Field(() => String, { nullable: true })
    userId?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    password?: string;

    @Field(() => String, { nullable: true })
    bio?: string;

    @Field(() => String, { nullable: true })
    image?: string;

    @Field(() => UserUpdateManyWithoutFollowingInput, { nullable: true })
    followers?: UserUpdateManyWithoutFollowingInput;

    @Field(() => ArticleUpdateManyWithoutFavoritedByInput, { nullable: true })
    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

    @Field(() => ArticleUpdateManyWithoutAuthorInput, { nullable: true })
    articles?: ArticleUpdateManyWithoutAuthorInput;

    @Field(() => CommentUpdateManyWithoutAuthorInput, { nullable: true })
    comments?: CommentUpdateManyWithoutAuthorInput;
}
