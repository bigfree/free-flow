import { gql } from '@/generated/freeFlow';

export const FlowDetailQuery = gql(/* GraphQL */ `
    query Flow($where: FlowWhereUniqueInput!) {
        __typename
        flow(where: $where) {
            __typename
            description
            data
            edges
            _count {
                versions
            }
            ...FlowBaseFragment
        }
    }
`);
