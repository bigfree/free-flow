import { Module } from '@nestjs/common';
import { UserConfigService } from './user-config.service';
import { UserConfigResolver } from './user-config.resolver';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserRoleService } from '../common/services/user-role/user-role.service';

@Module({
    providers: [UserConfigResolver, UserConfigService, PrismaService, UserRoleService],
})
export class UserConfigModule {}
