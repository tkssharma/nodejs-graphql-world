import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneWithoutArticlesInput {
    @Field(() => UserCreateWithoutArticlesInput, { nullable: true })
    create?: UserCreateWithoutArticlesInput;

    @Field(() => UserCreateOrConnectWithoutArticlesInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

    @Field(() => UserUpsertWithoutArticlesInput, { nullable: true })
    upsert?: UserUpsertWithoutArticlesInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;

    @Field(() => Boolean, { nullable: true })
    disconnect?: boolean;

    @Field(() => Boolean, { nullable: true })
    delete?: boolean;

    @Field(() => UserUpdateWithoutArticlesInput, { nullable: true })
    update?: UserUpdateWithoutArticlesInput;
}
