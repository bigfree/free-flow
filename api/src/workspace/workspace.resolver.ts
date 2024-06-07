import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { WorkspaceService } from './workspace.service';
import {
    CreateOneWorkspaceArgs,
    DeleteOneWorkspaceArgs,
    FindManyWorkspaceArgs,
    FindUniqueWorkspaceArgs,
    UpdateOneWorkspaceArgs,
    Workspace,
} from '../@generated';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { PubSub } from 'graphql-subscriptions';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';
import { User } from '../@generated';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';

@UseGuards(JwtAuthGuard)
@Resolver(() => Workspace)
export class WorkspaceResolver {
    /**
     * Creates a new instance of the constructor.
     *
     * @param {WorkspaceService} workspaceService - The workspace service instance.
     * @param {PubSub} pubSub - The PubSub instance.
     */
    constructor(
        private readonly workspaceService: WorkspaceService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Creates a new workspace.
     *
     * @param {CreateOneWorkspaceArgs} createOneWorkspaceArgs - The arguments for creating the workspace.
     * @return {Promise<Workspace>} - A promise that resolves to the created workspace.
     */
    @UseGuards(GqlThrottlerGuard)
    @Mutation(() => Workspace)
    public async createWorkspace(@Args() createOneWorkspaceArgs: CreateOneWorkspaceArgs): Promise<Workspace> {
        const workspace: Workspace = await this.workspaceService.create(createOneWorkspaceArgs);

        await this.pubSub.publish(PublishStateEnum.WORKSPACE_CREATED, {
            [PublishStateEnum.WORKSPACE_CREATED]: workspace,
        });

        return workspace;
    }

    /**
     * Finds all workspaces based on the provided arguments.
     *
     * @param {FindManyWorkspaceArgs} findManyWorkspaceArgs - The arguments used to filter the workspaces.
     * @returns {Promise<Workspace[]>} - A promise that resolves to an array of Workspace objects that match the provided arguments.
     */
    @UseGuards(GqlThrottlerGuard)
    @Query(() => [Workspace], { name: 'workspaces' })
    public async findAll(@Args() findManyWorkspaceArgs: FindManyWorkspaceArgs): Promise<Workspace[]> {
        return this.workspaceService.findAll(findManyWorkspaceArgs);
    }

    /**
     * Find one workspace based on the provided arguments.
     *
     * @param {FindUniqueWorkspaceArgs} findUniqueWorkspaceArgs - The arguments to find the unique workspace.
     * @returns {Promise<Workspace | null>} - A promise that resolves to the found workspace or null if not found.
     */
    @Query(() => Workspace, { name: 'workspace' })
    public async findOne(@Args() findUniqueWorkspaceArgs: FindUniqueWorkspaceArgs): Promise<Workspace | null> {
        return this.workspaceService.findOne(findUniqueWorkspaceArgs);
    }

    /**
     * Updates a workspace.
     *
     * @param {UpdateOneWorkspaceArgs} updateOneWorkspaceArgs - The arguments for updating the workspace.
     * @return {Promise<Workspace>} - A promise that resolves to the updated workspace.
     */
    @Mutation(() => Workspace)
    public async updateWorkspace(@Args() updateOneWorkspaceArgs: UpdateOneWorkspaceArgs): Promise<Workspace> {
        const workspace: Workspace = await this.workspaceService.update(updateOneWorkspaceArgs);

        await this.pubSub.publish(PublishStateEnum.WORKSPACE_UPDATED, {
            [PublishStateEnum.WORKSPACE_UPDATED]: workspace,
        });

        return workspace;
    }

    /**
     * Removes a workspace.
     *
     * @param {DeleteOneWorkspaceArgs} deleteOneWorkspaceArgs - The arguments for deleting the workspace.
     * @return {Promise<Workspace>} - A promise that resolves to the removed workspace.
     */
    @Mutation(() => Workspace)
    public async removeWorkspace(@Args() deleteOneWorkspaceArgs: DeleteOneWorkspaceArgs): Promise<Workspace> {
        const workspace: Workspace = await this.workspaceService.remove(deleteOneWorkspaceArgs);

        await this.pubSub.publish(PublishStateEnum.WORKSPACE_DELETED, {
            [PublishStateEnum.WORKSPACE_DELETED]: workspace,
        });

        return workspace;
    }

    /**
     * Creates a subscription to listen for newly created workspaces.
     *
     * @returns {Promise<AsyncIterator<Workspace>>} - A promise that resolves to an async iterator of Workspace objects.
     *
     * @description
     * This method creates a subscription using the PubSub library to listen for events when a new workspace is created.
     * The subscription is guarded by the "RolesGuard" to ensure that only users with the "ROLE_ADMIN" or "ROLE_USER" roles can access it.
     * When a new workspace is created, the method returns an async iterator that can be used to iterate over the created workspaces.
     *
     * @see {@link RolesGuard}
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Subscription(() => User, { name: PublishStateEnum.WORKSPACE_CREATED })
    public async createdWorkspace(): Promise<AsyncIterator<Workspace>> {
        return this.pubSub.asyncIterator(PublishStateEnum.WORKSPACE_CREATED);
    }

    /**
     * Subscribe to the event of a workspace being updated.
     *
     * @returns {Promise<AsyncIterator<Workspace>>} - A promise that resolves to an async iterator of Workspace objects.
     *
     * @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
     * @Subscription(() => User, { name: PublishStateEnum.WORKSPACE_UPDATED })
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Subscription(() => User, { name: PublishStateEnum.WORKSPACE_UPDATED })
    public async updatedWorkspace(): Promise<AsyncIterator<Workspace>> {
        return this.pubSub.asyncIterator(PublishStateEnum.WORKSPACE_UPDATED);
    }

    /**
     * Retrieve a subscription for the event when a workspace is deleted.
     * Only users with the roles ROLE_ADMIN and ROLE_USER can subscribe to this event.
     *
     * @return {Promise<AsyncIterator<Workspace>>} A promise that resolves to an async iterator of Workspace objects.
     * The async iterator emits events whenever a workspace is deleted.
     * Each event includes the updated Workspace object.
     *
     * @throws {Error} If the user does not have the required roles to subscribe to this event.
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN, UserRole.ROLE_USER]))
    @Subscription(() => User, { name: PublishStateEnum.WORKSPACE_DELETED })
    public async deletedWorkspace(): Promise<AsyncIterator<Workspace>> {
        return this.pubSub.asyncIterator(PublishStateEnum.WORKSPACE_DELETED);
    }
}
