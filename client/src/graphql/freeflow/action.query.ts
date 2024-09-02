import { gql } from '@/generated/freeFlow';

export const ActionDetailQuery = gql(/* GraphQL */ `
    query Action($where: ActionWhereUniqueInput!) {
        __typename
        action(where: $where) {
            __typename
            ...ActionBaseFragment
            width,
            height,
            radius,
            class,
            description
        }
    }
`);
