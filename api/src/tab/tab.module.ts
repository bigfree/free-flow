import { Module } from '@nestjs/common';
import { TabService } from './tab.service';
import { TabResolver } from './tab.resolver';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
    providers: [TabResolver, TabService, PrismaService],
})
export class TabModule {}
