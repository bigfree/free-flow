import { gql } from '@/generated/freeFlow';

export const MeFragment = gql(/* GraphQL */ `
    fragment MeFragment on User {
        __typename
        id
        type
        role
        email
        tabs {
            ...TabFragment
        }
        profile {
            ...ProfileFragment
        }
        createdWorkspaces {
            ...WorkspaceBaseFragment
        }
        assignedWorkspaces {
            __typename
            workspace {
                ...WorkspaceBaseFragment
            }
        }
    }
`);
