import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { OnEvent } from '@nestjs/event-emitter';
import { CreateFlowVersionEvent } from '../../events/create-flow-version.event';

@Injectable()
export class FlowVersionListener {
    constructor(private readonly prismaService: PrismaService) {}

    @OnEvent('create.flow.version')
    async handleCreateVersionedVersioned(eventData: CreateFlowVersionEvent): Promise<void> {
        await this.prismaService.flowVersion.create({
            data: eventData.flow,
        });

        // TODO: Add to audit
    }
}
