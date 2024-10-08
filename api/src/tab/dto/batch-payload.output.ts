import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BatchPayload {
    @Field(type => Int)
    count: number;
}