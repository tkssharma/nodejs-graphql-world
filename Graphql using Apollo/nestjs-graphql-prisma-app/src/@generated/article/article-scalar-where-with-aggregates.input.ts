import { Field, InputType } from '@nestjs/graphql';

import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ArticleScalarWhereWithAggregatesInput {
    @Field(() => [ArticleScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    articleId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    body?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    favoritesCount?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    authorId?: StringWithAggregatesFilter;
}
