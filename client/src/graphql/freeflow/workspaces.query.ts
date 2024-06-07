import { gql } from '@/generated/freeFlow';

export const MyAssignWorkspacesOnPickerQuery = gql(/*GraphQL*/ `
    query myAssignWorkspacesOnPicker(
        $workspaceWhere: WorkspaceWhereInput
    ) {
        workspaces(where: $workspaceWhere) {
            __typename
            ...WorkspaceBaseFragment
            profile {
                __typename
                ...WorkspaceProfileFragment
            }
        }
    }
`);
