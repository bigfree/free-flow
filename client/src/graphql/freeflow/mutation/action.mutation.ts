import { gql } from '@/generated/freeFlow';

export const CreateActionMutation = gql(/* GraphQL */ `
    mutation CreateAction($data: ActionCreateInput!) {
        __typename
        createAction(data: $data) {
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

export const UpdateActionMutation = gql(/* GraphQL */ `
    mutation UpdateAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {
        __typename
        updateAction(data: $data, where: $where) {
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
