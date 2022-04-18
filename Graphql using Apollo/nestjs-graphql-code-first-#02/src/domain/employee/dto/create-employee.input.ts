import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {


  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  designation: string;

  @Field({nullable:true})
  city: string;
}
