import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { FindManyFlowVersionArgs, FindUniqueFlowVersionArgs, FlowVersion } from '../@generated';

@Injectable()
export class FlowVersionService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Finds a unique FlowVersion based on the given arguments.
     *
     * @param {FindUniqueFlowVersionArgs} findUniqueFlowVersionArgs - The arguments used to find the unique FlowVersion.
     * @returns {Promise<FlowVersion|null>} - A Promise that resolves with the unique FlowVersion if found, or null if not found.
     */
    public async findUnique(findUniqueFlowVersionArgs: FindUniqueFlowVersionArgs): Promise<FlowVersion | null> {
        return this.prismaService.flowVersion.findUnique({
            include: {
                user: true,
                flow: true,
            },
            where: findUniqueFlowVersionArgs.where,
        });
    }

    /**
     * Retrieves multiple FlowVersion objects that match the provided search criteria.
     *
     * @param {FindManyFlowVersionArgs} findManyFlowVersionArgs - The arguments for finding multiple FlowVersion objects.
     * @returns {Promise<FlowVersion[]>} - A promise that resolves to an array of FlowVersion objects.
     */
    public async findMany(findManyFlowVersionArgs: FindManyFlowVersionArgs): Promise<FlowVersion[]> {
        return this.prismaService.flowVersion.findMany({
            where: findManyFlowVersionArgs.where,
            cursor: findManyFlowVersionArgs.cursor,
            distinct: findManyFlowVersionArgs.distinct,
            take: findManyFlowVersionArgs.take,
            orderBy: findManyFlowVersionArgs.orderBy,
            skip: findManyFlowVersionArgs.skip,
        });
    }
}
