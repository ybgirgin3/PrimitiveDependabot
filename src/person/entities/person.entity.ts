import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GithubRepo } from '../../github-repo/entities/github-repo.entity';

@Entity()
@ObjectType()
export class Person {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID of the Person' })
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field(() => Int)
  repoId: number;

  @ManyToOne(() => GithubRepo, (repo) => repo.subs)
  @Field(() => GithubRepo)
  repo: GithubRepo;
}
