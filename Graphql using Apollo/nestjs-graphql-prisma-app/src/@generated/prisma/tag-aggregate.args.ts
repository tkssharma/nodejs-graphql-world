import { ArgsType, Field, Int } from '@nestjs/graphql';

import { TagCountAggregateInput } from '../tag/tag-count-aggregate.input';
import { TagMaxAggregateInput } from '../tag/tag-max-aggregate.input';
import { TagMinAggregateInput } from '../tag/tag-min-aggregate.input';
import { TagOrderByInput } from '../tag/tag-order-by.input';
import { TagWhereInput } from '../tag/tag-where.input';
import { TagWhereUniqueInput } from '../tag/tag-where-unique.input';

@ArgsType()
export class TagAggregateArgs {
    @Field(() => TagWhereInput, { nullable: true })
    where?: TagWhereInput;

    @Field(() => [TagOrderByInput], { nullable: true })
    orderBy?: Array<TagOrderByInput>;

    @Field(() => TagWhereUniqueInput, { nullable: true })
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => TagCountAggregateInput, { nullable: true })
    _count?: TagCountAggregateInput;

    @Field(() => TagMinAggregateInput, { nullable: true })
    _min?: TagMinAggregateInput;

    @Field(() => TagMaxAggregateInput, { nullable: true })
    _max?: TagMaxAggregateInput;
}
