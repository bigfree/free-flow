import { Test, TestingModule } from '@nestjs/testing';
import { FlowVersionService } from './flow-version.service';

describe('FlowVersionService', () => {
  let service: FlowVersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlowVersionService],
    }).compile();

    service = module.get<FlowVersionService>(FlowVersionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
