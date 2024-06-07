import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TabService } from './tab.service';
import { CreateOneTabArgs, DeleteManyTabArgs, DeleteOneTabArgs, FindManyTabArgs, Tab } from '../@generated';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { SkipThrottle } from '@nestjs/throttler';
import { BatchPayload } from './dto/batch-payload.output';

@UseGuards(JwtAuthGuard)
@Resolver(() => Tab)
export class TabResolver {
    constructor(private readonly tabService: TabService) {}

    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Mutation(() => Tab)
    public async createTab(@Args() createOneTabArgs: CreateOneTabArgs): Promise<Tab> {
        return this.tabService.create(createOneTabArgs);
    }

    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Query(() => [Tab], { name: 'tabs' })
    public async findAll(@Args() findManyTabArgs: FindManyTabArgs): Promise<Tab[]> {
        return this.tabService.findAll(findManyTabArgs);
    }

    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Mutation(() => Tab)
    public async removeOneTab(@Args() deleteOneTabArgs: DeleteOneTabArgs): Promise<Tab> {
        return this.tabService.removeOne(deleteOneTabArgs);
    }

    @UseGuards(GqlThrottlerGuard)
    @SkipThrottle({ short: true })
    @Mutation(() => Tab)
    public async removeManyTab(@Args() deleteManyTabArgs: DeleteManyTabArgs): Promise<BatchPayload> {
        return this.tabService.removeMany(deleteManyTabArgs);
    }
}
