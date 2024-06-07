import { Args, Query, Resolver } from '@nestjs/graphql';
import { FlowVersionService } from './flow-version.service';
import { FindManyFlowVersionArgs, FindUniqueFlowVersionArgs, FlowVersion } from '../@generated';
import { UseGuards } from '@nestjs/common';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

/**
 * Resolves queries related to FlowVersion.
 */
@UseGuards(JwtAuthGuard)
@Resolver(() => FlowVersion)
export class FlowVersionResolver {
    /**
     * Constructor for a class instance.
     *
     * @param {FlowVersionService} flowVersionService - An instance of the FlowVersionService class.
     */
    constructor(private readonly flowVersionService: FlowVersionService) {}

    /**
     * Retrieves a single instance of FlowVersion based on the provided arguments.
     *
     * @param {FindUniqueFlowVersionArgs} findUniqueFlowVersionArgs - The arguments to find unique FlowVersion.
     * @returns {Promise<FlowVersion|null>} - A Promise that resolves to the found FlowVersion or null if no matching record was found.
     */
    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Query(() => FlowVersion, { name: 'flowVersion' })
    public async findOne(@Args() findUniqueFlowVersionArgs: FindUniqueFlowVersionArgs): Promise<FlowVersion | null> {
        return this.flowVersionService.findUnique(findUniqueFlowVersionArgs);
    }

    /**
     * Finds multiple FlowVersions based on the provided arguments.
     *
     * @param {FindManyFlowVersionArgs} findManyFlowVersionArgs - The arguments to filter and paginate the FlowVersions.
     * @return {Promise<FlowVersion[]>} - A Promise that resolves to an array of FlowVersions matching the provided arguments.
     */
    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Query(() => [FlowVersion], { name: 'flowVersions' })
    public async findAll(@Args() findManyFlowVersionArgs: FindManyFlowVersionArgs): Promise<FlowVersion[]> {
        return this.flowVersionService.findMany(findManyFlowVersionArgs);
    }
}
