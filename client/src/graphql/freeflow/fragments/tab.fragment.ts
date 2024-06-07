import { gql } from '@/generated/freeFlow';

export const TabFragment = gql(/* GraphQL */`
    fragment TabFragment on Tab {
        __typename
        id
        data
    }
`);