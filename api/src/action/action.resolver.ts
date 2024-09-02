import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActionService } from './action.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import {
    Action,
    CreateOneActionArgs,
    DeleteOneActionArgs,
    FindManyActionArgs,
    FindUniqueActionArgs,
    UpdateOneActionArgs,
} from '../@generated/index';
import { PubSub } from 'graphql-subscriptions';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { SkipThrottle } from '@nestjs/throttler';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Resolver(() => Action)
export class ActionResolver {
    /**
     * Constructor for the class.
     *
     * @param {ActionService} actionService - The action service instance.
     * @param {PubSub} pubSub - The pub-sub instance.
     */
    constructor(
        private readonly actionService: ActionService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Creates a new Action.
     *
     * @param {CreateOneActionArgs} createOneActionArgs - The arguments for creating the Action.
     * @returns {Promise<Action>} - A promise that resolves to the created Action.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => Action)
    public async createAction(@Args() createOneActionArgs: CreateOneActionArgs): Promise<Action> {
        // TODO: add pubsub
        return this.actionService.create(createOneActionArgs);
    }

    /**
     * Retrieves multiple Action objects based on the provided arguments.
     *
     * @param {FindManyActionArgs} findManyActionArgs - The arguments to filter and sort the Action objects.
     * @returns {Promise<Action[]>} The Promise that resolves to an array of Action objects.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Query(() => [Action], { name: 'actions' })
    public async findAll(@Args() findManyActionArgs: FindManyActionArgs): Promise<Action[]> {
        return this.actionService.findAll(findManyActionArgs);
    }

    /**
     * Retrieves a single Action based on the provided arguments.
     *
     * @param {FindUniqueActionArgs} findUniqueActionArgs - The arguments used to find the Action.
     * @returns {Promise<Action | null>} - A promise that resolves to the found Action or null if not found.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Query(() => Action, { name: 'action' })
    public async findOne(@Args() findUniqueActionArgs: FindUniqueActionArgs): Promise<Action | null> {
        return this.actionService.findOne(findUniqueActionArgs);
    }

    /**
     * Updates an existing action.
     *
     * @param {UpdateOneActionArgs} updateOneActionArgs - The arguments for updating the action.
     * @returns {Promise<Action>} A promise that resolves to the updated action.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => Action)
    updateAction(@Args() updateOneActionArgs: UpdateOneActionArgs): Promise<Action> {
        // TODO: add pubsub
        return this.actionService.update(updateOneActionArgs);
    }

    /**
     * Removes an action from the system.
     *
     * @param {DeleteOneActionArgs} deleteOneActionArgs - The arguments for deleting the action.
     * @return {Promise<Action>} A promise that resolves with the removed action.
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => Action)
    removeAction(@Args() deleteOneActionArgs: DeleteOneActionArgs): Promise<Action> {
        // TODO: add pubsub
        return this.actionService.remove(deleteOneActionArgs);
    }
}
