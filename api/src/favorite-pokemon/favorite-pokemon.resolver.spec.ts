import { Test, TestingModule } from '@nestjs/testing';
import { FavoritePokemonResolver } from './favorite-pokemon.resolver';
import { FavoritePokemonService } from './favorite-pokemon.service';

describe('FavoritePokemonResolver', () => {
  let resolver: FavoritePokemonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritePokemonResolver, FavoritePokemonService],
    }).compile();

    resolver = module.get<FavoritePokemonResolver>(FavoritePokemonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
