import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceResolver } from './workspace.resolver';
import { PrismaService } from '../common/prisma/prisma.service';
import { PubSubModule } from '../common/pubsub/pubsub.module';

@Module({
    imports: [PubSubModule],
    providers: [WorkspaceResolver, WorkspaceService, PrismaService],
})
export class WorkspaceModule {}
