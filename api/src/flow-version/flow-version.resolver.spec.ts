import { Test, TestingModule } from '@nestjs/testing';
import { FlowVersionResolver } from './flow-version.resolver';
import { FlowVersionService } from './flow-version.service';

describe('FlowVersionResolver', () => {
  let resolver: FlowVersionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlowVersionResolver, FlowVersionService],
    }).compile();

    resolver = module.get<FlowVersionResolver>(FlowVersionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
