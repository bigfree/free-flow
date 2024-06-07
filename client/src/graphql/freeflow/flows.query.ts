import { gql } from '@/generated/freeFlow';

export const FlowsQuery = gql(/* GraphQL */ `
    query Flows($where: FlowWhereInput) {
        flows(where: $where) {
            ...FlowsQueryFragment
        }
    }
`);

export const FlowsQueryFragment = gql(/* GraphQL */ `
    fragment FlowsQueryFragment on Flow {
        __typename
        ...FlowBaseFragment
    }
`);
