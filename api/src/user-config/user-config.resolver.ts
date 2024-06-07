import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserConfigService } from './user-config.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import {
    CreateOneUserConfigArgs,
    FindUniqueUserConfigArgs,
    UpdateOneUserConfigArgs,
    UpsertOneUserConfigArgs,
    UserConfig,
    UserConfigCreateInput,
    UserConfigUpdateInput,
} from '../@generated';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';
import { SkipThrottle } from '@nestjs/throttler';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AccessTokenData } from '../common/types/authorize.types';

@UseGuards(JwtAuthGuard)
@Resolver(() => UserConfig)
export class UserConfigResolver {
    /**
     * Constructs a new instance of the class.
     *
     * @param {UserConfigService} userConfigService - The user configuration service object.
     */
    constructor(private readonly userConfigService: UserConfigService) {}

    /**
     * Finds the UserConfig object for the authenticated user.
     *
     * @param {AccessTokenData} accessTokenData - The access token data of the authenticated user.
     * @return {Promise<UserConfig | null>} - The found UserConfig object or null if not found.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Query(() => UserConfig, { name: 'myConfig' })
    public async myConfig(@CurrentUser() accessTokenData: AccessTokenData): Promise<UserConfig | null> {
        return await this.userConfigService.findUnique({
            where: {
                userId: accessTokenData.id,
            },
        });
    }

    /**
     * Creates a user configuration using the provided access token and user configuration input.
     *
     * @param {AccessTokenData} accessTokenData - The access token data for the current user.
     * @param {UserConfigCreateInput} userConfigCreateInput - The input data for creating the user configuration.
     * @returns {Promise<UserConfig>} A promise that resolves to the created user configuration.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Mutation(() => UserConfig, { name: 'createMyConfig' })
    public async createMyConfig(
        @CurrentUser() accessTokenData: AccessTokenData,
        @Args('userConfigCreateInput') userConfigCreateInput: UserConfigCreateInput,
    ): Promise<UserConfig> {
        return await this.userConfigService.createOne({
            data: {
                ...userConfigCreateInput,
                user: {
                    connect: {
                        id: accessTokenData.id,
                    },
                },
            },
        });
    }

    /**
     * Updates the user configuration for the currently authenticated user.
     *
     * @param {AccessTokenData} accessTokenData - The access token data of the authenticated user.
     * @param {UserConfigUpdateInput} userConfigUpdateInput - The input data for updating user configuration.
     * @returns {Promise<UserConfig>} - A promise that resolves to the updated user configuration.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Mutation(() => UserConfig, { name: 'updateMyConfig' })
    public async updateMyConfig(
        @CurrentUser() accessTokenData: AccessTokenData,
        @Args('userConfigUpdateInput') userConfigUpdateInput: UserConfigUpdateInput,
    ): Promise<UserConfig> {
        return await this.userConfigService.updateOne({
            where: {
                userId: accessTokenData.id,
            },
            data: userConfigUpdateInput,
        });
    }

    /**
     * Finds a unique user configuration.
     *
     * @param {FindUniqueUserConfigArgs} findUniqueUserConfigArgs - The arguments to find the unique user configuration.
     * @returns {Promise<UserConfig | null>} - The unique user configuration, or null if not found.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN]))
    @SkipThrottle({ short: true })
    @Query(() => UserConfig, { name: 'userConfig' })
    public async findOne(@Args() findUniqueUserConfigArgs: FindUniqueUserConfigArgs): Promise<UserConfig | null> {
        return await this.userConfigService.findUnique(findUniqueUserConfigArgs);
    }

    /**
     * Creates a user configuration.
     *
     * @param {CreateOneUserConfigArgs} createOneUserConfigArgs - The arguments for creating the user configuration.
     * @returns {Promise<UserConfig>} - The created user configuration.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN]))
    @SkipThrottle({ short: true })
    @Mutation(() => UserConfig, { name: 'createUserConfig' })
    public async createUserConfig(@Args() createOneUserConfigArgs: CreateOneUserConfigArgs): Promise<UserConfig> {
        return await this.userConfigService.createOne(createOneUserConfigArgs);
    }

    /**
     * Updates the user configuration.
     *
     * @param {UpdateOneUserConfigArgs} updateOneUserConfigArgs The arguments required to update the user configuration.
     * @return {Promise<UserConfig>} A promise that resolves to the updated user configuration.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN]))
    @SkipThrottle({ short: true })
    @Mutation(() => UserConfig, { name: 'updateUserConfig' })
    public async updateUserConfig(@Args() updateOneUserConfigArgs: UpdateOneUserConfigArgs): Promise<UserConfig> {
        return await this.userConfigService.updateOne(updateOneUserConfigArgs);
    }

    /**
     * Upserts a user configuration.
     *
     * @param upsertOneUserConfigArgs The arguments for upserting the user configuration.
     * @returns A Promise that resolves to the upserted UserConfig object.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN]))
    @SkipThrottle({ short: true })
    @Mutation(() => UserConfig, { name: 'upsertUserConfig' })
    public async upsertUserConfig(@Args() upsertOneUserConfigArgs: UpsertOneUserConfigArgs): Promise<UserConfig> {
        return await this.userConfigService.upsertOne(upsertOneUserConfigArgs);
    }
}
