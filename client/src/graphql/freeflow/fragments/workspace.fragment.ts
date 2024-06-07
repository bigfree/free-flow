import { gql } from '@apollo/client';

export const WorkspaceFragmentOnMe = gql(/*GraphQL*/ `
    fragment WorkspaceBaseFragment on Workspace {
        __typename
        id
        name
        aberration
    }
`);

export const WorkspaceProfileFragmentOnMe = gql(/*GraphQL*/ `
    fragment WorkspaceProfileFragment on WorkspaceProfile {
        id
        color
        icon
    }
`);
