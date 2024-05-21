import { Test, TestingModule } from '@nestjs/testing';
import { FlowResolver } from './flow.resolver';
import { FlowService } from './flow.service';

describe('FlowResolver', () => {
  let resolver: FlowResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlowResolver, FlowService],
    }).compile();

    resolver = module.get<FlowResolver>(FlowResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
