import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    userId?: true;

    @Field(() => Boolean, { nullable: true })
    email?: true;

    @Field(() => Boolean, { nullable: true })
    name?: true;

    @Field(() => Boolean, { nullable: true })
    password?: true;

    @Field(() => Boolean, { nullable: true })
    bio?: true;

    @Field(() => Boolean, { nullable: true })
    image?: true;

    @Field(() => Boolean, { nullable: true })
    _all?: true;
}
