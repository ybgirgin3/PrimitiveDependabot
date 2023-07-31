import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { GithubRepo } from '../github-repo/entities/github-repo.entity';
import { ResolveField } from '@nestjs/graphql';
import { Parent } from '@nestjs/graphql';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Mutation(() => Person)
  createPerson(
    @Args('createPersonInput') createPersonInput: CreatePersonInput,
  ) {
    return this.personService.create(createPersonInput);
  }

  @Query(() => [Person])
  getPersons(): Promise<Person[]> {
    const filters = null;
    return this.personService.findAll(filters);
  }

  @Query(() => Person)
  getPerson(@Args('id', { type: () => Int }) id: number) {
    return this.personService.findOne(id);
  }

  @Mutation(() => Person)
  updatePerson(
    @Args('updatePersonInput') updatePersonInput: UpdatePersonInput,
  ) {
    return this.personService.update(updatePersonInput.id, updatePersonInput);
  }

  @Mutation(() => Person)
  removePerson(@Args('id', { type: () => Int }) id: number) {
    return this.personService.remove(id);
  }
}
