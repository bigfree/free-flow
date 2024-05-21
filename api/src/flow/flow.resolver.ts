import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { FlowService } from './flow.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { PubSub } from 'graphql-subscriptions';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { SkipThrottle } from '@nestjs/throttler';
import {
    CreateOneFlowArgs,
    DeleteOneFlowArgs,
    FindManyFlowArgs,
    FindUniqueFlowArgs,
    Flow,
    UpdateOneFlowArgs,
} from '../@generated/flow';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';

@UseGuards(JwtAuthGuard)
@Resolver(() => Flow)
export class FlowResolver {
    /**
     * Initializes a new instance of the class.
     *
     * @param {FlowService} flowService - The flow service used for managing flow.
     * @param {PubSub} pubSub - The pub/sub service used for event communication.
     */
    constructor(
        private readonly flowService: FlowService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Creates a new flow.
     *
     * @param {CreateOneFlowArgs} createOneFlowArgs - The arguments needed to create a flow.
     * @returns {Promise<Flow>} A promise that resolves to the newly created flow.
     */
    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Mutation(() => Flow)
    public async createFlow(@Args() createOneFlowArgs: CreateOneFlowArgs): Promise<Flow> {
        const flow = await this.flowService.create(createOneFlowArgs);

        await this.pubSub.publish(PublishStateEnum.FLOW_CREATED, {
            [PublishStateEnum.FLOW_CREATED]: flow,
        });

        return flow;
    }

    /**
     * Finds all flows.
     *
     * @param {FindManyFlowArgs} findManyFlowArgs - The arguments to filter the flows.
     * @returns {Promise<Flow[]>} - A promise that resolves with an array of flows.
     */
    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Query(() => [Flow], { name: 'flows' })
    public async findAll(@Args() findManyFlowArgs: FindManyFlowArgs): Promise<Flow[]> {
        return this.flowService.findAll(findManyFlowArgs);
    }

    /**
     * Finds a unique flow based on the provided arguments.
     * @param {FindUniqueFlowArgs} findUniqueFlowArgs - The arguments used to find the unique flow.
     * @returns {Promise<Flow|null>} - A promise that resolves to the unique flow found.
     */
    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Query(() => Flow, { name: 'flow' })
    public async findOne(@Args() findUniqueFlowArgs: FindUniqueFlowArgs): Promise<Flow | null> {
        return this.flowService.findOne(findUniqueFlowArgs);
    }

    /**
     * Updates a flow by using the provided arguments.
     *
     * @param {UpdateOneFlowArgs} updateOneFlowArgs - The arguments for updating the flow.
     * @return {Promise<Flow>} - A promise that resolves to the updated flow.
     */
    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Mutation(() => Flow)
    public async updateFlow(@Args() updateOneFlowArgs: UpdateOneFlowArgs): Promise<Flow> {
        const flow = await this.flowService.update(updateOneFlowArgs);

        await this.pubSub.publish(PublishStateEnum.FLOW_UPDATED, {
            [PublishStateEnum.USER_UPDATED]: flow,
        });

        return flow;
    }

    /**
     * Removes a flow.
     *
     * @param deleteOneFlowArgs - The arguments for deleting a flow.
     * @returns The deleted flow.
     */
    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Mutation(() => Flow)
    public async removeFlow(@Args() deleteOneFlowArgs: DeleteOneFlowArgs) {
        const flow = this.flowService.remove(deleteOneFlowArgs);

        await this.pubSub.publish(PublishStateEnum.FLOW_DELETED, {
            [PublishStateEnum.FLOW_DELETED]: flow,
        });

        return flow;
    }

    /**
     * Returns an async iterator that subscribes to the 'FLOW_CREATED' event and
     * only allows access for users with 'ROLE_ADMIN' or 'ROLE_USER' roles.
     *
     * @returns {Promise<AsyncIterator<User>>} - An async iterator that emits User objects whenever a 'FLOW_CREATED' event occurs.
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Subscription(() => Flow, { name: PublishStateEnum.FLOW_CREATED })
    public async createdFlow(): Promise<AsyncIterator<Flow>> {
        return this.pubSub.asyncIterator(PublishStateEnum.FLOW_CREATED);
    }

    /**
     * Returns an asynchronous iterator for subscribing to updates to the Flow entity.
     * Only users with ROLE_ADMIN or ROLE_USER role are allowed to access this method.
     *
     * @returns {Promise<AsyncIterator<Flow>>} Returns a promise that resolves to an asynchronous iterator for Flow updates.
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Subscription(() => Flow, { name: PublishStateEnum.FLOW_UPDATED })
    public async updatedFlow(): Promise<AsyncIterator<Flow>> {
        return this.pubSub.asyncIterator(PublishStateEnum.FLOW_UPDATED);
    }

    /**
     * Returns an asynchronous iterator for deleted flows.
     * Only accessible to users with admin or user roles.
     *
     * @returns {Promise<AsyncIterator<Flow>>} An asynchronous iterator for deleted flows.
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Subscription(() => Flow, { name: PublishStateEnum.FLOW_DELETED })
    public async deletedFlow(): Promise<AsyncIterator<Flow>> {
        return this.pubSub.asyncIterator(PublishStateEnum.FLOW_DELETED);
    }
}
