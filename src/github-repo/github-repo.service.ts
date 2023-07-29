import { Injectable } from '@nestjs/common';
import { CreateGithubRepoInput } from './dto/create-github-repo.input';
import { UpdateGithubRepoInput } from './dto/update-github-repo.input';

import { GithubRepo } from './entities/github-repo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GithubRepoService {
  constructor(
    @InjectRepository(GithubRepo)
    private githubRepoRepository: Repository<GithubRepo>,
  ) {}
  async create(
    createGithubRepoInput: CreateGithubRepoInput,
  ): Promise<GithubRepo> {
    // return 'This action adds a new githubRepo';
    const newGitRepo = this.githubRepoRepository.create(createGithubRepoInput);
    return this.githubRepoRepository.save(newGitRepo);
  }

  findAll(): Promise<GithubRepo[]> {
    // return `This action returns all githubRepo`;
    return this.githubRepoRepository.find();
  }

  findOne(id: number): Promise<GithubRepo> {
    // return `This action returns a #${id} githubRepo`;
    return this.githubRepoRepository.findOneByOrFail({ id });
  }

  update(id: number, updateGithubRepoInput: UpdateGithubRepoInput) {
    return `This action updates a #${id} githubRepo`;
  }

  remove(id: number) {
    return `This action removes a #${id} githubRepo`;
  }
}
