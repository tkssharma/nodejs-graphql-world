import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from '../../category/entities/category.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../../project/entities/project.entity';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column()
  firstname: string;

  @Field()
  @Column()
  lastname: string;

  @Field()
  @Column()
  designation: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;


  @ManyToOne(() => Project, (project) => project.employees)
  @Field(() => Project, { nullable: true })
  project: Project;

  @Column({ nullable: true })
  @Field({ nullable: true })
  projectId: number

  @OneToMany(() => Category, (category) => category.employee)
  @Field(() => [Category], { nullable: true })//important to be array
  categories: Category[];
}
