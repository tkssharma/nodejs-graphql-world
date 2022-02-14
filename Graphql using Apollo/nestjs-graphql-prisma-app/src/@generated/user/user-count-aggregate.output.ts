import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => Int, { nullable: false })
    email!: number;

    @Field(() => Int, { nullable: false })
    name!: number;

    @Field(() => Int, { nullable: false })
    password!: number;

    @Field(() => Int, { nullable: false })
    bio!: number;

    @Field(() => Int, { nullable: false })
    image!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
