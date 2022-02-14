import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateOrConnectWithoutAuthorInput } from './comment-create-or-connect-without-author.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], { nullable: true })
    create?: Array<CommentCreateWithoutAuthorInput>;

    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], { nullable: true })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;

    @Field(() => [CommentWhereUniqueInput], { nullable: true })
    connect?: Array<CommentWhereUniqueInput>;
}
