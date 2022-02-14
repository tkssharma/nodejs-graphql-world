import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserCountAggregateInput } from '../user/user-count-aggregate.input';
import { UserMaxAggregateInput } from '../user/user-max-aggregate.input';
import { UserMinAggregateInput } from '../user/user-min-aggregate.input';
import { UserOrderByInput } from '../user/user-order-by.input';
import { UserWhereInput } from '../user/user-where.input';
import { UserWhereUniqueInput } from '../user/user-where-unique.input';

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, { nullable: true })
    where?: UserWhereInput;

    @Field(() => [UserOrderByInput], { nullable: true })
    orderBy?: Array<UserOrderByInput>;

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
