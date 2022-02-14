import { IsOptional, IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class GetAccountsArgs {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  public email?: string;
}
