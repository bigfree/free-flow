import { gql } from '@/generated/freeFlow';

export const ProfileFragment = gql(/*GraphQL*/ `
    fragment ProfileFragment on Profile {
        __typename
        id
        acronym
        avatar
        firstName
        lastName
        username
        bio
    }
`);
