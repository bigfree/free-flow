import { Injectable } from '@nestjs/common';
import { CreateOneTabArgs, DeleteManyTabArgs, DeleteOneTabArgs, FindManyTabArgs, Tab } from '../@generated';
import { PrismaService } from '../common/prisma/prisma.service';
import { BatchPayload } from './dto/batch-payload.output';

@Injectable()
export class TabService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Creates a new tab.
     *
     * @param {CreateOneTabArgs} createOneTabArgs - The arguments to create a new tab.
     * @return {Promise<Tab>} - A promise that resolves to the newly created tab.
     */
    public async create(createOneTabArgs: CreateOneTabArgs): Promise<Tab> {
        return this.prismaService.tab.create({
            data: createOneTabArgs.data,
            include: {
                user: true,
            },
        });
    }

    /**
     * Find all tabs based on the provided arguments.
     *
     * @param {FindManyTabArgs} findManyTabArgs - The arguments used to filter and include related entities.
     * @return {Promise<Tab[]>} - A promise that resolves with an array of Tab objects.
     */
    public async findAll(findManyTabArgs: FindManyTabArgs): Promise<Tab[]> {
        return this.prismaService.tab.findMany({
            cursor: findManyTabArgs.cursor,
            distinct: findManyTabArgs.distinct,
            include: {
                user: true,
            },
            orderBy: findManyTabArgs.orderBy,
            skip: findManyTabArgs.skip,
            take: findManyTabArgs.take,
            where: findManyTabArgs.where,
        });
    }

    /**
     * Removes a single tab.
     *
     * @param {DeleteOneTabArgs} deleteOneTabArgs - The arguments to delete a tab
     * @return {Promise<Tab>} - A Promise that resolves to the deleted tab
     */
    public async removeOne(deleteOneTabArgs: DeleteOneTabArgs): Promise<Tab> {
        return this.prismaService.tab.delete({
            include: {
                user: true,
            },
            where: deleteOneTabArgs.where,
        });
    }

    /**
     * Removes multiple tab objects from the database.
     *
     * @param {DeleteManyTabArgs} deleteManyTabArgs - The arguments for removing multiple tabs.
     * @returns {Promise<BatchPayload>} - A promise that resolves to a BatchPayload object representing the number of tabs removed.
     */
    public async removeMany(deleteManyTabArgs: DeleteManyTabArgs): Promise<BatchPayload> {
        return this.prismaService.tab.deleteMany({
            where: deleteManyTabArgs.where,
        });
    }
}
