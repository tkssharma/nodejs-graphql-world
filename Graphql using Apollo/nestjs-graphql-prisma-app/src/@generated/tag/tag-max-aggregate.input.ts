import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TagMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    tagId?: true;

    @Field(() => Boolean, { nullable: true })
    name?: true;
}
