import { Module } from '@nestjs/common';
import { FlowVersionService } from './flow-version.service';
import { FlowVersionResolver } from './flow-version.resolver';
import { FlowVersionListener } from './listeners/flow-version.listener';
import { PrismaService } from '../common/prisma/prisma.service';
import { PubSubModule } from '../common/pubsub/pubsub.module';

@Module({
    imports: [PubSubModule],
    providers: [FlowVersionResolver, FlowVersionService, FlowVersionListener, PrismaService],
})
export class FlowVersionModule {}
