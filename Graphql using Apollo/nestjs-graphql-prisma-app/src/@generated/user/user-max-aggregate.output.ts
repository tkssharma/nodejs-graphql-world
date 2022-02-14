import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, { nullable: true })
    userId?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    password?: string;

    @Field(() => String, { nullable: true })
    bio?: string;

    @Field(() => String, { nullable: true })
    image?: string;
}
