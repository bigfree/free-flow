import { gql } from '@/generated/freeFlow';

export const FlowDetailMutation = gql(/* GraphQL */ `
    mutation UpdateFlow($data: FlowUpdateInput!, $where: FlowWhereUniqueInput!) {
        updateFlow(data: $data, where: $where) {
            __typename
            description
            data
            _count {
                versions
            }
            ...FlowBaseFragment
        }
    }
`);
