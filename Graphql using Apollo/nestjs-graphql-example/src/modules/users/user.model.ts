import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { Team } from '../teams/team.model';

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field({ nullable: false })
  firstName: string;

  @Column()
  @Field({ nullable: false })
  lastName: string;

  @ManyToMany(() => Team, team => team.members)
  @Field(type => [ Team ], { nullable: true })
  teams: Promise<Team[]>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@InputType()
export class UserInput {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field(() => Int, { nullable: true })
  teamId?: number;
}