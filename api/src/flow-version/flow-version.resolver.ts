import { Resolver } from '@nestjs/graphql';
import { FlowVersionService } from './flow-version.service';

@Resolver()
export class FlowVersionResolver {
    constructor(private readonly flowVersionService: FlowVersionService) {}
}
