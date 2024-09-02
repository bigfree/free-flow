import { Module } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionResolver } from './action.resolver';
import { PubSubModule } from '../common/pubsub/pubsub.module';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserRoleService } from '../common/services/user-role/user-role.service';

@Module({
    imports: [PubSubModule],
    providers: [ActionResolver, ActionService, PrismaService, UserRoleService],
})
export class ActionModule {}
