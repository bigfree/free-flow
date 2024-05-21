import { Module } from '@nestjs/common';
import { FlowService } from './flow.service';
import { FlowResolver } from './flow.resolver';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserRoleService } from '../common/services/user-role/user-role.service';
import { PubSubModule } from '../common/pubsub/pubsub.module';

@Module({
    imports: [PubSubModule],
    providers: [FlowResolver, FlowService, PrismaService, UserRoleService],
})
export class FlowModule {}
