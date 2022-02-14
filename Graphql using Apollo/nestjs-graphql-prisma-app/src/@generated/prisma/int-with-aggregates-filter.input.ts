import { Field, InputType, Int } from '@nestjs/graphql';

import { FloatFilter } from './float-filter.input';
import { IntFilter } from './int-filter.input';

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, { nullable: true })
    equals?: number;

    @Field(() => [Int], { nullable: true })
    in?: Array<number>;

    @Field(() => [Int], { nullable: true })
    notIn?: Array<number>;

    @Field(() => Int, { nullable: true })
    lt?: number;

    @Field(() => Int, { nullable: true })
    lte?: number;

    @Field(() => Int, { nullable: true })
    gt?: number;

    @Field(() => Int, { nullable: true })
    gte?: number;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    not?: IntWithAggregatesFilter;

    @Field(() => IntFilter, { nullable: true })
    _count?: IntFilter;

    @Field(() => FloatFilter, { nullable: true })
    _avg?: FloatFilter;

    @Field(() => IntFilter, { nullable: true })
    _sum?: IntFilter;

    @Field(() => IntFilter, { nullable: true })
    _min?: IntFilter;

    @Field(() => IntFilter, { nullable: true })
    _max?: IntFilter;
}
