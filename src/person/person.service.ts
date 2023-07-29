import { Injectable } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { InjectRepository } from '@nestjs/typeorm';
import { GithubRepo } from '../github-repo/entities/github-repo.entity';
import { Repository } from 'typeorm';
import { GithubRepoService } from '../github-repo/github-repo.service';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(GithubRepo)
    private personRepository: Repository<Person>,
    private gitRepoService: GithubRepoService,
  ) {}
  create(createPersonInput: CreatePersonInput) {
    // return 'This action adds a new person';
    const newPerson = this.personRepository.create(createPersonInput);
    return this.personRepository.save(newPerson);
  }

  findAll() {
    // return `This action returns all person`;
    return this.personRepository.find();
  }

  findOne(id: number) {
    // return `This action returns a #${id} person`;
    return this.personRepository.findOneByOrFail({ id });
  }

  async getGithubRepo(repoId: number): Promise<GithubRepo> {
    return this.gitRepoService.findOne(repoId);
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
