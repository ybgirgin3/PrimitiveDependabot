import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Person } from '../../person/entities/person.entity';

// Sadece github repo olsun onun icinde array tut emailler oraya eklensin person olmasin

@Entity()
@ObjectType()
export class GithubRepo {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID of the GithubRepo' })
  id: number;

  @Column()
  @Field({ description: 'Name of the GithubRepo like "react-native"' })
  name: string;

  @Column()
  @Field({ description: 'Url of the GithubRepo' })
  url: string;

  // user will be here
  @OneToMany(() => Person, (person) => person.repo)
  @Field(() => [Person], { nullable: true })
  subs?: Person[];
}
