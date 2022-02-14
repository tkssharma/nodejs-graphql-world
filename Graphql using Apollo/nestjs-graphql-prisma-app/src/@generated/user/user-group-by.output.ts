import { Field, ObjectType } from '@nestjs/graphql';

import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';

@ObjectType()
export class UserGroupBy {
    @Field(() => String, { nullable: false })
    userId!: string;

    @Field(() => String, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    password!: string;

    @Field(() => String, { nullable: true })
    bio?: string;

    @Field(() => String, { nullable: true })
    image?: string;

    @Field(() => UserCountAggregate, { nullable: true })
    _count?: UserCountAggregate;

    @Field(() => UserMinAggregate, { nullable: true })
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, { nullable: true })
    _max?: UserMaxAggregate;
}
