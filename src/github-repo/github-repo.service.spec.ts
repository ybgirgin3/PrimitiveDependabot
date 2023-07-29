import { Test, TestingModule } from '@nestjs/testing';
import { GithubRepoService } from './github-repo.service';

describe('GithubRepoService', () => {
  let service: GithubRepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubRepoService],
    }).compile();

    service = module.get<GithubRepoService>(GithubRepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
