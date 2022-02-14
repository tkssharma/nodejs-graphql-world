import { MaxLength, IsString, IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class AddAccountInput {
  @Field()
  @IsEmail()
  public email: string;

  @Field()
  @IsString()
  @MaxLength(50)
  public password: string;
}
