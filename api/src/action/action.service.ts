import { Injectable } from '@nestjs/common';
import {
    Action,
    CreateOneActionArgs,
    DeleteOneActionArgs,
    FindManyActionArgs,
    FindUniqueActionArgs,
    UpdateOneActionArgs,
} from '../@generated/index';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateLogEvent } from '../events/create-log.event';
import { LogFrom, LogType } from '@prisma/client';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class ActionService {
    /**
     * Constructor for the class.
     *
     * @param {PrismaService} prismaService - The PrismaService instance to be injected.
     * @param eventEmitter
     */
    constructor(
        private readonly prismaService: PrismaService,
        private readonly eventEmitter: EventEmitter2,
    ) {}

    /**
     * Create a new action.
     * @async
     * @param {CreateOneActionArgs} createOneActionArgs - The arguments for creating the action.
     * @return {Promise<Action>} - A Promise that resolves to the newly created action.
     */
    public async create(createOneActionArgs: CreateOneActionArgs): Promise<Action> {
        const logData: CreateLogEvent = {
            type: LogType.LOG,
            from: LogFrom.API,
            eventName: 'create',
            serviceName: ActionService.name,
        };

        const existingAction = await this.prismaService.action.findUnique({
            where: {
                name: createOneActionArgs.data.name,
            },
        });

        if (existingAction) {
            this.eventEmitter.emit(
                'create.log',
                new CreateLogEvent({
                    ...logData,
                    type: LogType.ERROR,
                    message: 'Action already exists',
                    context: {
                        ...createOneActionArgs,
                    },
                }),
            );
            throw new Error('Action already exists');
        }

        return this.prismaService.action.create({
            data: createOneActionArgs.data,
            include: {
                _count: true,
                actionsOnWorkspaces: {
                    include: {
                        workspace: true,
                    },
                },
            },
        });
    }

    /**
     * Finds all Action objects based on the provided FindManyActionArgs.
     *
     * @async
     * @param {FindManyActionArgs} findManyActionArgs - The arguments used to filter, order, and include related entities.
     * @returns {Promise<Action[]>} The array of Action objects that match the provided arguments.
     */
    public async findAll(findManyActionArgs: FindManyActionArgs): Promise<Action[]> {
        return this.prismaService.action.findMany({
            where: findManyActionArgs.where,
            orderBy: findManyActionArgs.orderBy,
            cursor: findManyActionArgs.cursor,
            take: findManyActionArgs.take,
            skip: findManyActionArgs.skip,
            distinct: findManyActionArgs.distinct,
            include: {
                _count: true,
                actionsOnWorkspaces: {
                    include: {
                        workspace: true,
                    },
                },
            },
        });
    }

    /**
     * Finds a single Action based on the provided arguments.
     *
     * @param {FindUniqueActionArgs} findUniqueActionArgs - The arguments used to find the Action.
     * @returns {Promise<Action | null>} - A Promise that resolves to the found Action or null if not found.
     */
    public async findOne(findUniqueActionArgs: FindUniqueActionArgs): Promise<Action | null> {
        return this.prismaService.action.findUniqueOrThrow({
            where: findUniqueActionArgs.where,
            include: {
                _count: true,
                actionsOnWorkspaces: {
                    include: {
                        workspace: true,
                    },
                },
            },
        });
    }

    /**
     * Updates an action in the database.
     *
     * @param {UpdateOneActionArgs} updateOneActionArgs - The arguments for the update action.
     * @returns {Promise<Action>} - A promise that resolves to the updated action.
     */
    public async update(updateOneActionArgs: UpdateOneActionArgs): Promise<Action> {
        // TODO: add throw if not exist

        return this.prismaService.action.update({
            data: updateOneActionArgs.data,
            where: updateOneActionArgs.where,
            include: {
                _count: true,
                actionsOnWorkspaces: {
                    include: {
                        workspace: true,
                    },
                },
            },
        });
    }

    /**
     * Remove method removes a single action record from the database.
     *
     * @param {DeleteOneActionArgs} deleteOneActionArgs - The arguments for deleting the action record.
     * @return {Promise<Action>} - A promise that resolves once the record is successfully removed.
     */
    public async remove(deleteOneActionArgs: DeleteOneActionArgs): Promise<Action> {
        // TODO: add throw if not exist
        return this.prismaService.action.delete({
            where: deleteOneActionArgs.where,
            include: {
                _count: true,
                actionsOnWorkspaces: {
                    include: {
                        workspace: true,
                    },
                },
            },
        });
    }
}
