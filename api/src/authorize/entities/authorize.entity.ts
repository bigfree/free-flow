import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../@generated/user/';
import { GraphQLJWT } from 'graphql-scalars';

@ObjectType('Authorize')
export class Authorize {
    @Field(() => GraphQLJWT, { description: 'JWT Token' })
    accessToken: string;

    @Field(() => GraphQLJWT, { description: 'JWT Token' })
    refreshToken: string;

    @Field(() => User)
    user: User;
}
