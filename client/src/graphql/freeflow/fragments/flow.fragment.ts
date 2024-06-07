import { gql } from '@/generated/freeFlow';

export const FlowBaseFragment = gql(/* GraphQL */ `
    fragment FlowBaseFragment on Flow {
        id
        name
        code
        externalId
        createdAt
    }
`);