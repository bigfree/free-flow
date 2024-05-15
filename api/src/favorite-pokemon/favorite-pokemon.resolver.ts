import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { FavoritePokemonService } from './favorite-pokemon.service';
import {
    CreateOneFavoritePokemonArgs,
    DeleteOneFavoritePokemonArgs,
    FavoritePokemon,
    FindManyFavoritePokemonArgs,
    FindUniqueFavoritePokemonArgs,
} from '../@generated/favorite-pokemon';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { PubSub } from 'graphql-subscriptions';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { SkipThrottle } from '@nestjs/throttler';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';

@UseGuards(JwtAuthGuard)
@Resolver(() => FavoritePokemon)
export class FavoritePokemonResolver {
    constructor(
        private readonly favoritePokemonService: FavoritePokemonService,
        private readonly pubSub: PubSub,
    ) {}

    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => FavoritePokemon)
    public async createFavoritePokemon(
        @Args() createOneFavoritePokemonArgs: CreateOneFavoritePokemonArgs,
    ): Promise<FavoritePokemon> {
        const favoritePokemon = await this.favoritePokemonService.createOne(createOneFavoritePokemonArgs);

        await this.pubSub.publish(PublishStateEnum.FAVORITE_POKEMON_CREATED, {
            [PublishStateEnum.FAVORITE_POKEMON_CREATED]: favoritePokemon,
        });

        return favoritePokemon;
    }

    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Query(() => [FavoritePokemon], { name: 'favoritePokemons' })
    public async findAll(@Args() findManyFavoritePokemonArgs: FindManyFavoritePokemonArgs): Promise<FavoritePokemon[]> {
        return this.favoritePokemonService.findMany(findManyFavoritePokemonArgs);
    }

    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Query(() => FavoritePokemon, { name: 'favoritePokemon' })
    public async findOne(
        @Args() findUniqueFavoritePokemonArgs: FindUniqueFavoritePokemonArgs,
    ): Promise<FavoritePokemon | null> {
        return this.favoritePokemonService.findUnique(findUniqueFavoritePokemonArgs);
    }

    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => FavoritePokemon)
    public async removeFavoritePokemon(@Args() deleteOneFavoritePokemonArgs: DeleteOneFavoritePokemonArgs) {
        const favoritePokemon = await this.favoritePokemonService.deleteOne(deleteOneFavoritePokemonArgs);

        await this.pubSub.publish(PublishStateEnum.FAVORITE_POKEMON_DELETED, {
            [PublishStateEnum.FAVORITE_POKEMON_DELETED]: favoritePokemon,
        });

        return favoritePokemon;
    }

    /**
     * Creates a subscription for favorite Pokemon creation events.
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => FavoritePokemon, { name: PublishStateEnum.FAVORITE_POKEMON_CREATED })
    public async favoritePokemonCreated(): Promise<AsyncIterator<FavoritePokemon>> {
        return this.pubSub.asyncIterator(PublishStateEnum.FAVORITE_POKEMON_CREATED);
    }

    /**
     * Creates a subscription for favorite Pokemon delete events.
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => FavoritePokemon, { name: PublishStateEnum.FAVORITE_POKEMON_DELETED })
    public async favoritePokemonDeleted(): Promise<AsyncIterator<FavoritePokemon>> {
        return this.pubSub.asyncIterator(PublishStateEnum.FAVORITE_POKEMON_DELETED);
    }
}
