import { Test, TestingModule } from '@nestjs/testing';
import { DependabotService } from './dependabot.service';

describe('DependabotService', () => {
  let service: DependabotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DependabotService],
    }).compile();

    service = module.get<DependabotService>(DependabotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
