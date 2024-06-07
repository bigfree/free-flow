import { gql } from '@/generated/freeFlow';

export const LoginMutation = gql(/* GraphQL */`
    mutation Login($loginInput: LoginInput!) {
        login(loginInput: $loginInput) {
            __typename
            accessToken
            refreshToken
            user {
                __typename
                id
            }
        }
    }
`)