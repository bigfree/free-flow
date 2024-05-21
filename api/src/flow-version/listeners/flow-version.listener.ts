import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class FlowVersionListener {
    constructor(private readonly prismaService: PrismaService) {
    }
}