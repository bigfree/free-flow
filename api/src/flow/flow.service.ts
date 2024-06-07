import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import {
    CreateOneFlowArgs,
    DeleteOneFlowArgs,
    FindManyFlowArgs,
    FindUniqueFlowArgs,
    Flow,
    UpdateOneFlowArgs,
} from '../@generated';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateLogEvent } from '../events/create-log.event';
import { LogFrom, LogType } from '@prisma/client';
import { CreateFlowVersionEvent } from '../events/create-flow-version.event';

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
        /**
         * Create flow
         */
        const flow = await this.prismaService.flow.create({
            data: createOneFlowArgs.data,
            include: {
                _count: true,
                user: true,
                versions: true,
                assignedWorkspaces: {
                    include: {
                        flow: true,
                        workspace: true,
                    },
                },
            },
        });

        /**
         * Create new version from Flow
         */
        if (flow) {
            this.createVersionEvent(flow);
        }

        return flow;
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
            cursor: findManyFlowArgs.cursor,
            distinct: findManyFlowArgs.distinct,
            include: {
                _count: true,
                user: true,
                versions: true,
                assignedWorkspaces: {
                    include: {
                        flow: true,
                        workspace: true,
                    },
                },
            },
            orderBy: findManyFlowArgs.orderBy,
            skip: findManyFlowArgs.skip,
            take: findManyFlowArgs.take,
            where: findManyFlowArgs.where,
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
                _count: true,
                user: true,
                versions: true,
                assignedWorkspaces: {
                    include: {
                        flow: true,
                        workspace: true,
                    },
                },
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
        /**
         * Update flow
         */
        const flow = await this.prismaService.flow.update({
            data: updateOneFlowArgs.data,
            include: {
                _count: true,
                user: true,
                versions: true,
                assignedWorkspaces: {
                    include: {
                        flow: true,
                        workspace: true,
                    },
                },
            },
            where: updateOneFlowArgs.where,
        });

        /**
         * Create new version from update Flow
         */
        if (flow) {
            this.createVersionEvent(flow);
        }

        return flow;
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
                _count: true,
                user: true,
                versions: true,
                assignedWorkspaces: {
                    include: {
                        flow: true,
                        workspace: true,
                    },
                },
            },
            where: deleteOneFlowArgs.where,
        });
    }

    /**
     * Creates a flow version event and emits it using the event emitter.
     *
     * @param {Flow} flow - The flow object to create the version event for.
     * @returns {void} - A Promise that resolves when the flow version event is emitted.
     * @private
     */
    private createVersionEvent(flow: Flow): void {
        const resultEmit: boolean = this.eventEmitter.emit(
            'create.flow.version',
            new CreateFlowVersionEvent({
                flow: {
                    code: flow.code,
                    data: flow.data,
                    externalId: flow.externalId,
                    flow: {
                        connect: {
                            id: flow.id,
                        },
                    },
                    name: flow.name,
                    user: {
                        connect: {
                            id: flow.userId,
                        },
                    },
                },
            }),
        );

        if (!resultEmit) {
            this.eventEmitter.emit(
                'create.log',
                new CreateLogEvent({
                    context: {
                        flow,
                    },
                    eventName: this.createVersionEvent.name,
                    from: LogFrom.APP,
                    message: 'Create flow version error!',
                    serviceName: FlowService.name,
                    type: LogType.ERROR,
                }),
            );
        }
    }
}
