import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GithubRepo } from 'src/github-repo/entities/github-repo.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export class Person {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  email: string;

  // @Column()
  // @Field(() => Int)
  // repoId: number;

  @ManyToOne(() => GithubRepo, (repo) => repo.person)
  @Field(() => GithubRepo, { nullable: true })
  repo?: GithubRepo;
}
