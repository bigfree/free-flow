import { Test, TestingModule } from '@nestjs/testing';
import { FavoritePokemonService } from './favorite-pokemon.service';

describe('FavoritePokemonService', () => {
  let service: FavoritePokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritePokemonService],
    }).compile();

    service = module.get<FavoritePokemonService>(FavoritePokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
