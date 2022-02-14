import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [ArticleCreateWithoutAuthorInput], { nullable: true })
    create?: Array<ArticleCreateWithoutAuthorInput>;

    @Field(() => [ArticleCreateOrConnectWithoutAuthorInput], { nullable: true })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ArticleWhereUniqueInput], { nullable: true })
    connect?: Array<ArticleWhereUniqueInput>;
}
