import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserMinOrderByAggregateInput {
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
}
