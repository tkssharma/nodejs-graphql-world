import { MaxLength, IsString } from 'class-validator';
import { Field, InputType, ID } from 'type-graphql';

@InputType()
export class AddArticleInput {
  @Field()
  @IsString()
  @MaxLength(100)
  public title: string;

  @Field()
  @IsString()
  @MaxLength(3000)
  public content: string;

  @Field(type => ID)
  @IsString()
  public accountId: string;
}
