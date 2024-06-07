import { gql } from '@/generated/freeFlow';

export const UpdateMyConfig = gql(/* GraphQL */ `
    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {
        updateUserConfig(data: $data, where: $where) {
            ...MyConfigFragment
        }
    }
`);
