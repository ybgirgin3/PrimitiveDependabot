import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Person } from 'src/person/entities/person.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
@ObjectType()
export class GithubRepo {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field(() => Int)
  personId: number;

  @OneToMany(() => Person, (person) => person.repo)
  @Field(() => [Person])
  person?: Person[];
}
