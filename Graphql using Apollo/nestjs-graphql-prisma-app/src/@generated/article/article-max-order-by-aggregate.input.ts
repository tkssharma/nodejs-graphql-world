import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleMaxOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    articleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    favoritesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    authorId?: keyof typeof SortOrder;
}
