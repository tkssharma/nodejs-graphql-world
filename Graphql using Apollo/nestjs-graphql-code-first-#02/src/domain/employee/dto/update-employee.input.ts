import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field()
  id: number;
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  designation: string;

  @Field({nullable:true})
  city: string;
}
