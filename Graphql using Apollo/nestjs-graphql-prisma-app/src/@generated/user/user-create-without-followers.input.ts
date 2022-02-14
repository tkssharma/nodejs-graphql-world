import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateNestedManyWithoutAuthorInput } from '../article/article-create-nested-many-without-author.input';
import { ArticleCreateNestedManyWithoutFavoritedByInput } from '../article/article-create-nested-many-without-favorited-by.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';

@InputType()
export class UserCreateWithoutFollowersInput {
    @Field(() => String, { nullable: true })
    userId?: string;

    @Field(() => String, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    password!: string;

    @Field(() => String, { nullable: true })
    bio?: string;

    @Field(() => String, { nullable: true })
    image?: string;

    @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
    following?: UserCreateNestedManyWithoutFollowersInput;

    @Field(() => ArticleCreateNestedManyWithoutFavoritedByInput, { nullable: true })
    favoriteArticles?: ArticleCreateNestedManyWithoutFavoritedByInput;

    @Field(() => ArticleCreateNestedManyWithoutAuthorInput, { nullable: true })
    articles?: ArticleCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentCreateNestedManyWithoutAuthorInput, { nullable: true })
    comments?: CommentCreateNestedManyWithoutAuthorInput;
}
