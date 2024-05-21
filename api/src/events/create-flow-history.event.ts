import { Prisma } from '@prisma/client';

export class CreateFlowHistoryEvent {
    flow: Prisma.FlowCreateInput;
}
