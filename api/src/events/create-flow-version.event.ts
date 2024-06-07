import { Type } from 'class-transformer';
import { FlowVersionCreateInput } from '../@generated';

export class CreateFlowVersionEvent {
    @Type(() => FlowVersionCreateInput)
    flow: FlowVersionCreateInput;

    constructor(data: CreateFlowVersionEvent) {
        Object.assign(this, data);
    }
}
