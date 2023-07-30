import { Test, TestingModule } from '@nestjs/testing';
import { GithubRepoResolver } from './github-repo.resolver';
import { GithubRepoService } from './github-repo.service';

describe('GithubRepoResolver', () => {
  let resolver: GithubRepoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubRepoResolver, GithubRepoService],
    }).compile();

    resolver = module.get<GithubRepoResolver>(GithubRepoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
