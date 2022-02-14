import { Field, ID, ObjectType } from 'type-graphql';
import { ArticleEntity } from '../article/article.entity';
import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('account')
export class AccountEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  public createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  public updatedAt: Date;

  @Field()
  @Column({ type: 'text', unique: true })
  public email: string;

  @Column({ type: 'text' })
  public password: string;

  @Field(type => [ArticleEntity])
  public articles: ArticleEntity[];
}
