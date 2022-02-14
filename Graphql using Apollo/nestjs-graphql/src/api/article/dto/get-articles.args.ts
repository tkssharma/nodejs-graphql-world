import { IsOptional, IsString } from 'class-validator';
import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
export class GetArticlesArgs {
  @Field(type => ID, { nullable: true })
  @IsOptional()
  @IsString()
  public accountId?: string;
}
