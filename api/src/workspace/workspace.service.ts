import { Injectable } from '@nestjs/common';
import {
    CreateOneWorkspaceArgs,
    DeleteOneWorkspaceArgs,
    FindManyWorkspaceArgs,
    FindUniqueWorkspaceArgs,
    UpdateOneWorkspaceArgs,
    Workspace,
} from '../@generated';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class WorkspaceService {
    /**
     * Constructs a new instance of the class.
     *
     * @param {PrismaService} prismaService - The PrismaService instance to be used by the class.
     */
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Creates a new workspace.
     *
     * @param {CreateOneWorkspaceArgs} createOneWorkspaceArgs - The arguments for creating a workspace.
     * @return {Promise<Workspace>} - A promise that resolves to the created workspace.
     */
    public async create(createOneWorkspaceArgs: CreateOneWorkspaceArgs): Promise<Workspace> {
        // TODO: Add auto assign created user on event
        return this.prismaService.workspace.create({
            include: {
                createdBy: true,
                profile: true,
                activeOnUser: {
                    include: {
                        user: true,
                    },
                },
            },
            data: createOneWorkspaceArgs.data,
        });
    }

    /**
     * Finds and returns an array of Workspace objects based on the provided query parameters.
     *
     * @param {FindManyWorkspaceArgs} findManyWorkspaceArgs - The query parameters for finding Workspaces.
     * @return {Promise<Workspace[]>} - A promise that resolves to an array of Workspace objects.
     */
    public async findAll(findManyWorkspaceArgs: FindManyWorkspaceArgs): Promise<Workspace[]> {
        return this.prismaService.workspace.findMany({
            cursor: findManyWorkspaceArgs.cursor,
            distinct: findManyWorkspaceArgs.distinct,
            include: {
                _count: true,
                assignedFlows: true,
                assignedUsers: true,
                createdBy: true,
                profile: true,
                activeOnUser: {
                    include: {
                        user: true,
                    },
                },
            },
            orderBy: findManyWorkspaceArgs.orderBy,
            skip: findManyWorkspaceArgs.skip,
            take: findManyWorkspaceArgs.take,
            where: findManyWorkspaceArgs.where,
        });
    }

    /**
     * Retrieves a single workspace based on the provided arguments.
     *
     * @param {FindUniqueWorkspaceArgs} findUniqueWorkspaceArgs The arguments used to find the workspace.
     * @returns {Promise<Workspace | null>} A promise that resolves to the found workspace if it exists, otherwise null.
     */
    public async findOne(findUniqueWorkspaceArgs: FindUniqueWorkspaceArgs): Promise<Workspace | null> {
        return this.prismaService.workspace.findUnique({
            include: {
                _count: true,
                assignedFlows: true,
                assignedUsers: true,
                createdBy: true,
                profile: true,
                activeOnUser: {
                    include: {
                        user: true,
                    },
                },
            },
            where: findUniqueWorkspaceArgs.where,
        });
    }

    /**
     * Updates a workspace in the database.
     *
     * @param {UpdateOneWorkspaceArgs} updateOneWorkspaceArgs - The arguments to update the workspace.
     * @returns {Promise<Workspace>} - A promise that resolves with the updated workspace.
     */
    public async update(updateOneWorkspaceArgs: UpdateOneWorkspaceArgs): Promise<Workspace> {
        return this.prismaService.workspace.update({
            data: updateOneWorkspaceArgs.data,
            include: {
                _count: true,
                assignedFlows: true,
                assignedUsers: true,
                createdBy: true,
                profile: true,
                activeOnUser: {
                    include: {
                        user: true,
                    },
                },
            },
            where: updateOneWorkspaceArgs.where,
        });
    }

    /**
     * Removes a workspace from the database.
     *
     * @param {DeleteOneWorkspaceArgs} deleteOneWorkspaceArgs - The arguments for deleting a workspace.
     * @returns {Promise<Workspace>} - A promise that resolves with the deleted workspace.
     */
    public async remove(deleteOneWorkspaceArgs: DeleteOneWorkspaceArgs): Promise<Workspace> {
        return this.prismaService.workspace.delete({
            where: deleteOneWorkspaceArgs.where,
        });
    }
}
