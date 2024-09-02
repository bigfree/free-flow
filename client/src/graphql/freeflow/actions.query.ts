import { gql } from '@/generated/freeFlow';

export const ActionsQuery = gql(/* GraphQL */ `
    query Actions($where: ActionWhereInput, $orderBy: [ActionOrderByWithRelationInput!]) {
        __typename
        actions(where: $where, orderBy: $orderBy) {
            ...ActionsQueryFragment
        }
    }
`);

export const ActionsQueryFragment = gql(/* GraphQL */ `
    fragment ActionsQueryFragment on Action {
        __typename
        ...ActionBaseFragment
        width
        height
        radius
        class
        description
    }
`);
