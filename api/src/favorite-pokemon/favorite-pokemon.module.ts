import { Module } from '@nestjs/common';
import { FavoritePokemonService } from './favorite-pokemon.service';
import { FavoritePokemonResolver } from './favorite-pokemon.resolver';
import { PubSub } from 'graphql-subscriptions';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
    providers: [FavoritePokemonResolver, FavoritePokemonService, PubSub, PrismaService],
})
export class FavoritePokemonModule {}
