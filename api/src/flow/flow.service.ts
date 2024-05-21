import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import {
    CreateOneFlowArgs,
    DeleteOneFlowArgs,
    FindManyFlowArgs,
    FindUniqueFlowArgs,
    Flow,
    UpdateOneFlowArgs,
} from '../@generated/flow';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateLogEvent } from '../events/create-log.event';
import { LogFrom, LogType } from '@prisma/client';

@Injectable()
export class FlowService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly eventEmitter: EventEmitter2,
    ) {}

    /**
     * Creates a new Flow.
     *
     * @param {CreateOneFlowArgs} createOneFlowArgs - The arguments for creating a Flow.
     * @return {Promise<Flow>} A promise that resolves with the created Flow.
     */
    public async create(createOneFlowArgs: CreateOneFlowArgs): Promise<Flow> {
        // TODO: Add audit log
        // TODO: Add versions by event
        const logData: CreateLogEvent = {
            type: LogType.ERROR,
            from: LogFrom.API,
            eventName: 'createOne',
            serviceName: FlowService.name,
        };

        if (!(await this.isUserExist(createOneFlowArgs.data.user.connect.id))) {
            this.eventEmitter.emit(
                'create.log',
                new CreateLogEvent({
                    ...logData,
                    message: "User doesn't exist!",
                    context: {
                        ...createOneFlowArgs.data,
                    },
                }),
            );
            throw new Error("User doesn't exist!");
        }

        return this.prismaService.flow.create({
            include: {
                user: true,
            },
            data: createOneFlowArgs.data,
        });
    }

    /**
     * Finds multiple flows based on the given arguments.
     *
     * @param {FindManyFlowArgs} findManyFlowArgs - The arguments for finding multiple flows.
     * @returns {Promise<Flow[]>} - A Promise that resolves to an array of flows.
     */
    public async findAll(findManyFlowArgs: FindManyFlowArgs): Promise<Flow[]> {
        // TODO: Add audit log
        return this.prismaService.flow.findMany({
            include: {
                user: true,
            },
            where: findManyFlowArgs.where,
            cursor: findManyFlowArgs.cursor,
            distinct: findManyFlowArgs.distinct,
            take: findManyFlowArgs.take,
            orderBy: findManyFlowArgs.orderBy,
            skip: findManyFlowArgs.skip,
        });
    }

    /**
     * Find a unique flow by the given arguments.
     *
     * @param {FindUniqueFlowArgs} findUniqueFlowArgs - The arguments used to find the unique flow.
     * @returns {Promise<Flow | null>} - A promise that resolves to the found flow, or null if no flow is found.
     */
    public async findOne(findUniqueFlowArgs: FindUniqueFlowArgs): Promise<Flow | null> {
        // TODO: Add audit log
        return this.prismaService.flow.findUnique({
            include: {
                user: true,
            },
            where: findUniqueFlowArgs.where,
        });
    }

    /**
     * Updates a Flow.
     *
     * @param {UpdateOneFlowArgs} updateOneFlowArgs - The arguments for updating a Flow.
     * @return {Promise<Flow>} - Returns a Promise that resolves to the updated Flow.
     */
    public async update(updateOneFlowArgs: UpdateOneFlowArgs): Promise<Flow> {
        // TODO: Add audit log
        // TODO: Add versions by event
        const logData: CreateLogEvent = {
            type: LogType.ERROR,
            from: LogFrom.API,
            eventName: 'updateOne',
            serviceName: FlowService.name,
        };

        if (!(await this.isUserExist(updateOneFlowArgs.data.user.connect.id))) {
            this.eventEmitter.emit(
                'create.log',
                new CreateLogEvent({
                    ...logData,
                    message: "User doesn't exist!",
                    context: {
                        ...updateOneFlowArgs.data,
                    },
                }),
            );
            throw new Error("User doesn't exist!");
        }

        return this.prismaService.flow.update({
            include: {
                user: true,
            },
            data: updateOneFlowArgs.data,
            where: updateOneFlowArgs.where,
        });
    }

    /**
     * Removes a flow from the database.
     *
     * @param {DeleteOneFlowArgs} deleteOneFlowArgs - The arguments used to determine which flow to remove.
     * @return {Promise<void>}
     */
    public async remove(deleteOneFlowArgs: DeleteOneFlowArgs): Promise<Flow> {
        // TODO: Add audit log
        return this.prismaService.flow.delete({
            include: {
                user: true,
            },
            where: deleteOneFlowArgs.where,
        });
    }

    /**
     * Checks if a user with the given userId exists.
     *
     * @param {string} userId - The ID of the user to check.
     * @returns {Promise<boolean>} - A promise that resolves to true if the user exists, false otherwise.
     * @private
     */
    private async isUserExist(userId: string): Promise<boolean> {
        return !!(await this.prismaService.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
            },
        }));
    }
}
