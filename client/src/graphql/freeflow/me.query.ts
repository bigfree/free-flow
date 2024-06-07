import { gql } from '@/generated/freeFlow';

export const MeQuery = gql(/* GraphQL */ `
    query Me {
        __typename
        me {
            ...MeFragment
        }
    }
`);

export const MyConfig = gql(/* GraphQL */ `
    query MyConfig {
        myConfig {
            ...MyConfigFragment
        }
    }
`);

export const MyConfigFragment = gql(/*GraphQL*/ `
    fragment MyConfigFragment on UserConfig {
        __typename
        id
        theme
        activeWorkspace {
            __typename
            ...WorkspaceBaseFragment
            profile {
                __typename
                ...WorkspaceProfileFragment
            }
        }
    }
`);
