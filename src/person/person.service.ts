import { Injectable } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { GithubRepoService } from '../github-repo/github-repo.service';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>, // private gitService: GithubRepoService,
  ) {}

  create(createPersonInput: CreatePersonInput) {
    // return 'This action adds a new person';
    const newPerson = this.personRepo.create(createPersonInput);
    return this.personRepo.save(newPerson);
  }

  findAll(personid) {
    if (personid !== null) {
      return this.personRepo.find({ where: { id: personid } }); // SELECT * pet
    }
    return this.personRepo.find(); // SELECT * pet
  }

  findOne(id: number) {
    // return `This action returns a #${id} person`;
    return this.personRepo.findOneByOrFail({ id });
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }

  // getRepo(repoId: number) {
  //   return this.gitService.findOne(repoId);
  // }
}
