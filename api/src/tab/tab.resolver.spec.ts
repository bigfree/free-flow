import { Test, TestingModule } from '@nestjs/testing';
import { TabResolver } from './tab.resolver';
import { TabService } from './tab.service';

describe('TabResolver', () => {
  let resolver: TabResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabResolver, TabService],
    }).compile();

    resolver = module.get<TabResolver>(TabResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
