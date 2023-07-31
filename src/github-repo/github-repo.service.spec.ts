import { Test } from '@nestjs/testing';
import { GithubRepoService } from './github-repo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GithubRepo } from './entities/github-repo.entity';
import { CreateGithubRepoInput } from './dto/create-github-repo.input';

// Mock GithubRepo entity
jest.mock('./entities/github-repo.entity');

describe('GithubRepoService', () => {
  let githubRepoService: GithubRepoService;
  let gitRepoMock: Repository<GithubRepo>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        GithubRepoService,
        { provide: getRepositoryToken(GithubRepo), useClass: Repository }, // Mock Repository
      ],
    }).compile();

    githubRepoService = moduleRef.get<GithubRepoService>(GithubRepoService);
    gitRepoMock = moduleRef.get<Repository<GithubRepo>>(
      getRepositoryToken(GithubRepo),
    );
  });

  describe('create', () => {
    it('should create a GithubRepo', async () => {
      const createRepoInput: CreateGithubRepoInput = {
        owner: 'ybgirgin3',
        repoName: 'antispeedbump-backend-node',
        fileName: 'package.json',
        personId: 1,
      };

      const createdRepo = { id: 1, ...createRepoInput };
      gitRepoMock.create.mockReturnValue(createdRepo);
      gitRepoMock.save.mockResolvedValue(createdRepo);

      const result = await githubRepoService.create(createRepoInput);

      expect(result).toEqual(createdRepo);
      expect(gitRepoMock.create).toHaveBeenCalledWith(createRepoInput);
      expect(gitRepoMock.save).toHaveBeenCalledWith(createdRepo);
    });
  });

  describe('findAll', () => {
    it('should return an array of GithubRepos', async () => {
      const repos = [
        { id: 1, name: 'Repo 1' },
        { id: 2, name: 'Repo 2' },
      ];
      gitRepoMock.find.mockResolvedValue(repos);

      const result = await githubRepoService.findAll();

      expect(result).toEqual(repos);
      expect(gitRepoMock.find).toHaveBeenCalled();
    });
  });

  // Diğer metodların testleri benzer şekilde yapılabilir

  // Örnek olarak, getPerson metodunun testi
  describe('getPerson', () => {
    it('should return an array of Person', async () => {
      const personId = 1;
      const people = [
        { id: 1, name: 'Person 1' },
        { id: 2, name: 'Person 2' },
      ];
      const personServiceMock = {
        findAll: jest.fn().mockResolvedValue(people),
      };

      const moduleRef = await Test.createTestingModule({
        providers: [
          GithubRepoService,
          { provide: getRepositoryToken(GithubRepo), useClass: Repository },
          { provide: 'PersonService', useValue: personServiceMock }, // Mock PersonService
        ],
      }).compile();

      githubRepoService = moduleRef.get<GithubRepoService>(GithubRepoService);

      const result = await githubRepoService.getPerson(personId);

      expect(result).toEqual(people);
      expect(personServiceMock.findAll).toHaveBeenCalledWith(personId);
    });
  });
});
