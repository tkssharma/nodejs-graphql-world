import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from '../../employee/entities/employee.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Category {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column()
  name: string;
  

  @ManyToOne(() => Employee, (employee) => employee.categories)
  @Field(() => Employee)
  employee: Employee;

  @Column({ nullable: true })
  @Field({ nullable: true })
  employeeId:number

}
