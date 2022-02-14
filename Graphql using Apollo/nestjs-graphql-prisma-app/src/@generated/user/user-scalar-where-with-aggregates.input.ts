import { Field, InputType } from '@nestjs/graphql';

import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    password?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    bio?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    image?: StringWithAggregatesFilter;
}
