import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { AccountEntity } from '../account/account.entity';

@ObjectType()
@Entity('article')
export class ArticleEntity {
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
  @Column({ type: 'text' })
  public title: string;

  @Field()
  @Column({ type: 'text' })
  public content: string;

  @Field()
  @Column({ type: 'text' })
  public accountId: string;

  @Field(type => AccountEntity)
  public account: AccountEntity;
}
