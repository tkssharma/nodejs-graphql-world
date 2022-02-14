import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, { nullable: true })
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<UserOrderByWithRelationInput>;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => UserCountAggregateInput, { nullable: true })
    _count?: UserCountAggregateInput;

    @Field(() => UserMinAggregateInput, { nullable: true })
    _min?: UserMinAggregateInput;

    @Field(() => UserMaxAggregateInput, { nullable: true })
    _max?: UserMaxAggregateInput;
}
