import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TagCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    tagId?: true;

    @Field(() => Boolean, { nullable: true })
    name?: true;

    @Field(() => Boolean, { nullable: true })
    _all?: true;
}
