import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from '../../employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// TypeORM entity with Graphql Types 
@Entity()
@ObjectType()
export class Project {

  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number

  @Field()
  @Column()
  name: string

  @Field(() => Int)
  @Column()
  code: number

  @OneToMany(() => Employee, (employee) => employee.project)
  @Field(() => Employee, { nullable: true })
  employees: Employee[]

}