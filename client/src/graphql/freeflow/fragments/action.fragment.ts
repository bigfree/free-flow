import { gql } from '@/generated/freeFlow';

export const ActionBaseFragment = gql(/* GraphQL */ `
    fragment ActionBaseFragment on Action {
        id
        name
        code
        color
        variables
        type
        createdAt
    }
`);