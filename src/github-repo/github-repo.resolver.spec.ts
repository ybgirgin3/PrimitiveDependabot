import { Test } from '@nestjs/testing';
import { GithubRepoResolver } from './github-repo.resolver';
import { GithubRepoService } from './github-repo.service';
import { CreateGithubRepoInput } from './dto/create-github-repo.input';
import { UpdateGithubRepoInput } from './dto/update-github-repo.input';
import { Person } from '../person/entities/person.entity';

describe('GithubRepoResolver', () => {
  let githubRepoResolver: GithubRepoResolver;
  let githubRepoService: GithubRepoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [GithubRepoResolver, GithubRepoService],
    }).compile();

    githubRepoResolver = moduleRef.get<GithubRepoResolver>(GithubRepoResolver);
    githubRepoService = moduleRef.get<GithubRepoService>(GithubRepoService);
  });

  describe('createRepo', () => {
    it('should create a GithubRepo', async () => {
      const createRepoInput: CreateGithubRepoInput = {
        owner: 'ybgirgin3',
        repoName: 'antispeedbump-backend-node',
        fileName: 'package.json',
        personId: 1,
      };

      const createdRepo = { id: 1, ...createRepoInput };
      jest.spyOn(githubRepoService, 'create').mockResolvedValue(createdRepo);

      const result = await githubRepoResolver.createRepo(createRepoInput);

      expect(result).toEqual(createdRepo);
      expect(githubRepoService.create).toHaveBeenCalledWith(createRepoInput);
    });
  });

  describe('getRepos', () => {
    it('should return an array of GithubRepos', async () => {
      const repos = [
        {
          id: 1,
          owner: 'ybgirgin3',
          repoName: 'ybgirgin3',
          fileName: 'package.json',
        },
        {
          id: 2,
          owner: 'facebook',
          repoName: 'react-native',
          fileName: 'package.json',
        },
      ];
      jest.spyOn(githubRepoService, 'findAll').mockResolvedValue(repos);

      const result = await githubRepoResolver.getRepos();

      expect(result).toEqual(repos);
      expect(githubRepoService.findAll).toHaveBeenCalled();
    });
  });
});
