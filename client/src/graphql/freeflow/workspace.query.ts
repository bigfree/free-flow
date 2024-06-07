import { gql } from '@/generated/freeFlow';

export const WorkspaceOnWorkspacesPickerQuery = gql(/*GraphQL*/ `
    query WorkspaceOnWorkspacesPicker($workspaceWhere: WorkspaceWhereUniqueInput!) {
        workspace(where: $workspaceWhere) {
            ...WorkspaceBaseFragment
            profile {
                __typename
                ...WorkspaceProfileFragment
            }
        }
    }
`);
