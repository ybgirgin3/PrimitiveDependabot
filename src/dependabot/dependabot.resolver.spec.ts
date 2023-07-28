import { Test, TestingModule } from '@nestjs/testing';
import { DependabotResolver } from './dependabot.resolver';
import { DependabotService } from './dependabot.service';

describe('DependabotResolver', () => {
  let resolver: DependabotResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DependabotResolver, DependabotService],
    }).compile();

    resolver = module.get<DependabotResolver>(DependabotResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
