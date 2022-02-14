import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.model';

@Entity('teams')
@ObjectType()
export class Team {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field({ nullable: false })
  name: string;

  @ManyToMany(() => User, user => user.teams)
  @JoinTable()
  @Field(type => [ User ], { nullable: true })
  members: Promise<User[]>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@InputType()
export class TeamInput {
  @Field({ nullable: false })
  name: string;
}