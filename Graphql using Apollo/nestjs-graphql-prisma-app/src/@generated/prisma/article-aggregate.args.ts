import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ArticleAvgAggregateInput } from '../article/article-avg-aggregate.input';
import { ArticleCountAggregateInput } from '../article/article-count-aggregate.input';
import { ArticleMaxAggregateInput } from '../article/article-max-aggregate.input';
import { ArticleMinAggregateInput } from '../article/article-min-aggregate.input';
import { ArticleOrderByInput } from '../article/article-order-by.input';
import { ArticleSumAggregateInput } from '../article/article-sum-aggregate.input';
import { ArticleWhereInput } from '../article/article-where.input';
import { ArticleWhereUniqueInput } from '../article/article-where-unique.input';

@ArgsType()
export class ArticleAggregateArgs {
    @Field(() => ArticleWhereInput, { nullable: true })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], { nullable: true })
    orderBy?: Array<ArticleOrderByInput>;

    @Field(() => ArticleWhereUniqueInput, { nullable: true })
    cursor?: ArticleWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => ArticleCountAggregateInput, { nullable: true })
    _count?: ArticleCountAggregateInput;

    @Field(() => ArticleAvgAggregateInput, { nullable: true })
    _avg?: ArticleAvgAggregateInput;

    @Field(() => ArticleSumAggregateInput, { nullable: true })
    _sum?: ArticleSumAggregateInput;

    @Field(() => ArticleMinAggregateInput, { nullable: true })
    _min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, { nullable: true })
    _max?: ArticleMaxAggregateInput;
}
