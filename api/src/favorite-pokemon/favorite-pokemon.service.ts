import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import {
    CreateOneFavoritePokemonArgs,
    DeleteOneFavoritePokemonArgs,
    FavoritePokemon,
    FindManyFavoritePokemonArgs,
    FindUniqueFavoritePokemonArgs,
} from '../@generated/favorite-pokemon';

@Injectable()
export class FavoritePokemonService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Creates a favorite Pokemon.
     *
     * @param {CreateOneFavoritePokemonArgs} createOneFavoritePokemonArgs - The arguments for creating a favorite Pokemon.
     *
     * @return {Promise<any>} - A promise that resolves to the created favorite Pokemon.
     */
    public async createOne(createOneFavoritePokemonArgs: CreateOneFavoritePokemonArgs): Promise<FavoritePokemon> {
        return this.prismaService.favoritePokemon.create({
            include: {
                user: true,
            },
            ...createOneFavoritePokemonArgs,
        });
    }

    /**
     * Retrieves multiple entries of favorite Pokemon records from the database.
     *
     * @param {FindManyFavoritePokemonArgs} findManyFavoritePokemonArgs - The arguments for filtering and sorting the favorite Pokemon records.
     * @returns {Promise<FavoritePokemon[]>} - A promise that resolves to an array of favorite Pokemon records.
     */
    public async findMany(findManyFavoritePokemonArgs: FindManyFavoritePokemonArgs): Promise<FavoritePokemon[]> {
        return this.prismaService.favoritePokemon.findMany({
            include: {
                user: true,
            },
            ...findManyFavoritePokemonArgs,
        });
    }

    /**
     * Finds a unique FavoritePokemon record based on the provided arguments.
     *
     * @param {FindUniqueFavoritePokemonArgs} findUniqueFavoritePokemonArgs - The arguments used to find a unique FavoritePokemon record.
     * @returns {Promise<FavoritePokemon | null>} A Promise that resolves to a FavoritePokemon record if found, or null if not found.
     */
    public async findUnique(
        findUniqueFavoritePokemonArgs: FindUniqueFavoritePokemonArgs,
    ): Promise<FavoritePokemon | null> {
        return this.prismaService.favoritePokemon.findUniqueOrThrow({
            include: {
                user: true,
            },
            ...findUniqueFavoritePokemonArgs,
        });
    }

    /**
     * Deletes a favorite Pokemon from the database.
     *
     * @param {DeleteOneFavoritePokemonArgs} deleteOneFavoritePokemonArgs - The arguments needed to delete a favorite Pokemon.
     * @returns {Promise<any>} - A promise that resolves to the deleted favorite Pokemon.
     */
    public async deleteOne(deleteOneFavoritePokemonArgs: DeleteOneFavoritePokemonArgs): Promise<FavoritePokemon> {
        await this.prismaService.favoritePokemon.findUniqueOrThrow({
            where: deleteOneFavoritePokemonArgs.where,
        });

        return this.prismaService.favoritePokemon.delete({
            include: {
                user: true,
            },
            ...deleteOneFavoritePokemonArgs,
        });
    }
}
