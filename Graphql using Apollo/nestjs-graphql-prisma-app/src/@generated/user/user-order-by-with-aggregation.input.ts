import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, { nullable: true })
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    image?: keyof typeof SortOrder;

    @Field(() => UserCountOrderByAggregateInput, { nullable: true })
    _count?: UserCountOrderByAggregateInput;

    @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
    _max?: UserMaxOrderByAggregateInput;

    @Field(() => UserMinOrderByAggregateInput, { nullable: true })
    _min?: UserMinOrderByAggregateInput;
}
