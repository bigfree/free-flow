import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import {
    CreateOneUserConfigArgs,
    FindUniqueUserConfigArgs,
    UpdateOneUserConfigArgs,
    UpsertOneUserConfigArgs,
} from '../@generated';
import { UserConfig } from '@prisma/client';

@Injectable()
export class UserConfigService {
    /**
     * Creates an instance of the constructor with the provided PrismaService.
     *
     * @param {PrismaService} prismaService - The PrismaService used for database operations.
     */
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Find a unique UserConfig based on the provided arguments.
     *
     * @param {FindUniqueUserConfigArgs} findUniqueUserConfigArgs - The arguments used to find the unique UserConfig.
     * @return {Promise<UserConfig | null>} - A promise that resolves to the found UserConfig, or null if not found.
     */
    async findUnique(findUniqueUserConfigArgs: FindUniqueUserConfigArgs): Promise<UserConfig | null> {
        return this.prismaService.userConfig.findUnique({
            include: {
                activeWorkspace: true,
            },
            where: findUniqueUserConfigArgs.where,
        });
    }

    /**
     * Creates a new User Config in the database.
     *
     * @param {CreateOneUserConfigArgs} createOneUserConfigArgs - The arguments for creating the User Config.
     * @returns {Promise<UserConfig>} - A Promise that resolves to the newly created User Config.
     */
    public async createOne(createOneUserConfigArgs: CreateOneUserConfigArgs): Promise<UserConfig> {
        return this.prismaService.userConfig.create({
            include: {
                activeWorkspace: {
                    include: {
                        profile: true,
                    },
                },
            },
            data: createOneUserConfigArgs.data,
        });
    }

    /**
     * Updates a single user configuration based on the provided arguments.
     *
     * @param {UpdateOneUserConfigArgs} updateOneUserConfigArgs - The arguments for updating the user configuration.
     * @return {Promise<UserConfig>} - A promise that resolves to the updated user configuration.
     */
    async updateOne(updateOneUserConfigArgs: UpdateOneUserConfigArgs): Promise<UserConfig> {
        return this.prismaService.userConfig.update({
            include: {
                activeWorkspace: {
                    include: {
                        profile: true,
                    },
                },
            },
            where: updateOneUserConfigArgs.where,
            data: updateOneUserConfigArgs.data,
        });
    }

    /**
     * Upserts a user configuration in the database.
     *
     * @param {UpsertOneUserConfigArgs} upsertOneUserConfigArgs - The object containing the arguments for upserting the user configuration.
     * @return {Promise<UserConfig>} - A promise that resolves to the upserted user configuration.
     */
    async upsertOne(upsertOneUserConfigArgs: UpsertOneUserConfigArgs): Promise<UserConfig> {
        return this.prismaService.userConfig.upsert({
            include: {
                activeWorkspace: {
                    include: {
                        profile: true,
                    },
                },
            },
            where: upsertOneUserConfigArgs.where,
            update: upsertOneUserConfigArgs.update,
            create: upsertOneUserConfigArgs.create,
        });
    }
}
