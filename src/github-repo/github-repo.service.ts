import { Injectable } from '@nestjs/common';
import { CreateGithubRepoInput } from './dto/create-github-repo.input';
import { UpdateGithubRepoInput } from './dto/update-github-repo.input';
import { InjectRepository } from '@nestjs/typeorm';
import { GithubRepo } from './entities/github-repo.entity';
import { Repository } from 'typeorm';
import { PersonService } from '../person/person.service';

@Injectable()
export class GithubRepoService {
  constructor(
    @InjectRepository(GithubRepo) private gitRepo: Repository<GithubRepo>, // private personService: PersonService,
    private personService: PersonService,
  ) {}

  create(createGithubRepoInput: CreateGithubRepoInput) {
    // return 'This action adds a new githubRepo';
    const newRepo = this.gitRepo.create(createGithubRepoInput);
    return this.gitRepo.save(newRepo);
  }

  findAll() {
    // return `This action returns all githubRepo`;
    return this.gitRepo.find();
  }

  findOne(id: number) {
    return this.gitRepo.findOneByOrFail({ id });
  }

  update(id: number, updateGithubRepoInput: UpdateGithubRepoInput) {
    return `This action updates a #${id} githubRepo`;
  }

  remove(id: number) {
    return `This action removes a #${id} githubRepo`;
  }

  async getPerson(personId: number) {
    return this.personService.findAll(personId);
  }
}
