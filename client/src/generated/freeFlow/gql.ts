/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query Action($where: ActionWhereUniqueInput!) {\n        __typename\n        action(where: $where) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n": types.ActionDocument,
    "\n    query Actions($where: ActionWhereInput, $orderBy: [ActionOrderByWithRelationInput!]) {\n        __typename\n        actions(where: $where, orderBy: $orderBy) {\n            ...ActionsQueryFragment\n        }\n    }\n": types.ActionsDocument,
    "\n    fragment ActionsQueryFragment on Action {\n        __typename\n        ...ActionBaseFragment\n        width\n        height\n        radius\n        class\n        description\n    }\n": types.ActionsQueryFragmentFragmentDoc,
    "\n    query Flow($where: FlowWhereUniqueInput!) {\n        __typename\n        flow(where: $where) {\n            __typename\n            description\n            data\n            edges\n            _count {\n                versions\n            }\n            ...FlowBaseFragment\n        }\n    }\n": types.FlowDocument,
    "\n    query Flows($where: FlowWhereInput, $orderBy: [FlowOrderByWithRelationInput!]) {\n        flows(where: $where, orderBy: $orderBy) {\n            ...FlowsQueryFragment\n        }\n    }\n": types.FlowsDocument,
    "\n    fragment FlowsQueryFragment on Flow {\n        __typename\n        ...FlowBaseFragment\n    }\n": types.FlowsQueryFragmentFragmentDoc,
    "\n    fragment ActionBaseFragment on Action {\n        id\n        name\n        code\n        color\n        variables\n        type\n        createdAt\n    }\n": types.ActionBaseFragmentFragmentDoc,
    "\n    fragment FlowBaseFragment on Flow {\n        id\n        name\n        code\n        externalId\n        createdAt\n    }\n": types.FlowBaseFragmentFragmentDoc,
    "\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n": types.ProfileFragmentFragmentDoc,
    "\n    fragment TabFragment on Tab {\n        __typename\n        id\n        data\n    }\n": types.TabFragmentFragmentDoc,
    "\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        tabs {\n            ...TabFragment\n        }\n        profile {\n            ...ProfileFragment\n        }\n        createdWorkspaces {\n            ...WorkspaceBaseFragment\n        }\n        assignedWorkspaces {\n            __typename\n            workspace {\n                ...WorkspaceBaseFragment\n            }\n        }\n    }\n": types.MeFragmentFragmentDoc,
    "\n    fragment WorkspaceBaseFragment on Workspace {\n        __typename\n        id\n        name\n        aberration\n    }\n": types.WorkspaceBaseFragmentFragmentDoc,
    "\n    fragment WorkspaceProfileFragment on WorkspaceProfile {\n        id\n        color\n        icon\n    }\n": types.WorkspaceProfileFragmentFragmentDoc,
    "\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n        }\n    }\n": types.MeDocument,
    "\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n": types.MyConfigDocument,
    "\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        activeWorkspace {\n            __typename\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n": types.MyConfigFragmentFragmentDoc,
    "\n    mutation CreateAction($data: ActionCreateInput!) {\n        __typename\n        createAction(data: $data) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n": types.CreateActionDocument,
    "\n    mutation UpdateAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {\n        __typename\n        updateAction(data: $data, where: $where) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n": types.UpdateActionDocument,
    "\n    mutation UpdateFlow($data: FlowUpdateInput!, $where: FlowWhereUniqueInput!) {\n        updateFlow(data: $data, where: $where) {\n            __typename\n            description\n            data\n            _count {\n                versions\n            }\n            ...FlowBaseFragment\n        }\n    }\n": types.UpdateFlowDocument,
    "\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n": types.LoginDocument,
    "\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n": types.UpdateUserConfigDocument,
    "\n    query WorkspaceOnWorkspacesPicker($workspaceWhere: WorkspaceWhereUniqueInput!) {\n        workspace(where: $workspaceWhere) {\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n": types.WorkspaceOnWorkspacesPickerDocument,
    "\n    query myAssignWorkspacesOnPicker(\n        $workspaceWhere: WorkspaceWhereInput\n    ) {\n        workspaces(where: $workspaceWhere) {\n            __typename\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n": types.MyAssignWorkspacesOnPickerDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Action($where: ActionWhereUniqueInput!) {\n        __typename\n        action(where: $where) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n"): (typeof documents)["\n    query Action($where: ActionWhereUniqueInput!) {\n        __typename\n        action(where: $where) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Actions($where: ActionWhereInput, $orderBy: [ActionOrderByWithRelationInput!]) {\n        __typename\n        actions(where: $where, orderBy: $orderBy) {\n            ...ActionsQueryFragment\n        }\n    }\n"): (typeof documents)["\n    query Actions($where: ActionWhereInput, $orderBy: [ActionOrderByWithRelationInput!]) {\n        __typename\n        actions(where: $where, orderBy: $orderBy) {\n            ...ActionsQueryFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment ActionsQueryFragment on Action {\n        __typename\n        ...ActionBaseFragment\n        width\n        height\n        radius\n        class\n        description\n    }\n"): (typeof documents)["\n    fragment ActionsQueryFragment on Action {\n        __typename\n        ...ActionBaseFragment\n        width\n        height\n        radius\n        class\n        description\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Flow($where: FlowWhereUniqueInput!) {\n        __typename\n        flow(where: $where) {\n            __typename\n            description\n            data\n            edges\n            _count {\n                versions\n            }\n            ...FlowBaseFragment\n        }\n    }\n"): (typeof documents)["\n    query Flow($where: FlowWhereUniqueInput!) {\n        __typename\n        flow(where: $where) {\n            __typename\n            description\n            data\n            edges\n            _count {\n                versions\n            }\n            ...FlowBaseFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Flows($where: FlowWhereInput, $orderBy: [FlowOrderByWithRelationInput!]) {\n        flows(where: $where, orderBy: $orderBy) {\n            ...FlowsQueryFragment\n        }\n    }\n"): (typeof documents)["\n    query Flows($where: FlowWhereInput, $orderBy: [FlowOrderByWithRelationInput!]) {\n        flows(where: $where, orderBy: $orderBy) {\n            ...FlowsQueryFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment FlowsQueryFragment on Flow {\n        __typename\n        ...FlowBaseFragment\n    }\n"): (typeof documents)["\n    fragment FlowsQueryFragment on Flow {\n        __typename\n        ...FlowBaseFragment\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment ActionBaseFragment on Action {\n        id\n        name\n        code\n        color\n        variables\n        type\n        createdAt\n    }\n"): (typeof documents)["\n    fragment ActionBaseFragment on Action {\n        id\n        name\n        code\n        color\n        variables\n        type\n        createdAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment FlowBaseFragment on Flow {\n        id\n        name\n        code\n        externalId\n        createdAt\n    }\n"): (typeof documents)["\n    fragment FlowBaseFragment on Flow {\n        id\n        name\n        code\n        externalId\n        createdAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n"): (typeof documents)["\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment TabFragment on Tab {\n        __typename\n        id\n        data\n    }\n"): (typeof documents)["\n    fragment TabFragment on Tab {\n        __typename\n        id\n        data\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        tabs {\n            ...TabFragment\n        }\n        profile {\n            ...ProfileFragment\n        }\n        createdWorkspaces {\n            ...WorkspaceBaseFragment\n        }\n        assignedWorkspaces {\n            __typename\n            workspace {\n                ...WorkspaceBaseFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        tabs {\n            ...TabFragment\n        }\n        profile {\n            ...ProfileFragment\n        }\n        createdWorkspaces {\n            ...WorkspaceBaseFragment\n        }\n        assignedWorkspaces {\n            __typename\n            workspace {\n                ...WorkspaceBaseFragment\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment WorkspaceBaseFragment on Workspace {\n        __typename\n        id\n        name\n        aberration\n    }\n"): (typeof documents)["\n    fragment WorkspaceBaseFragment on Workspace {\n        __typename\n        id\n        name\n        aberration\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment WorkspaceProfileFragment on WorkspaceProfile {\n        id\n        color\n        icon\n    }\n"): (typeof documents)["\n    fragment WorkspaceProfileFragment on WorkspaceProfile {\n        id\n        color\n        icon\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n        }\n    }\n"): (typeof documents)["\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n"): (typeof documents)["\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        activeWorkspace {\n            __typename\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        activeWorkspace {\n            __typename\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateAction($data: ActionCreateInput!) {\n        __typename\n        createAction(data: $data) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n"): (typeof documents)["\n    mutation CreateAction($data: ActionCreateInput!) {\n        __typename\n        createAction(data: $data) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {\n        __typename\n        updateAction(data: $data, where: $where) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {\n        __typename\n        updateAction(data: $data, where: $where) {\n            __typename\n            ...ActionBaseFragment\n            width,\n            height,\n            radius,\n            class,\n            description\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateFlow($data: FlowUpdateInput!, $where: FlowWhereUniqueInput!) {\n        updateFlow(data: $data, where: $where) {\n            __typename\n            description\n            data\n            _count {\n                versions\n            }\n            ...FlowBaseFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateFlow($data: FlowUpdateInput!, $where: FlowWhereUniqueInput!) {\n        updateFlow(data: $data, where: $where) {\n            __typename\n            description\n            data\n            _count {\n                versions\n            }\n            ...FlowBaseFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query WorkspaceOnWorkspacesPicker($workspaceWhere: WorkspaceWhereUniqueInput!) {\n        workspace(where: $workspaceWhere) {\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    query WorkspaceOnWorkspacesPicker($workspaceWhere: WorkspaceWhereUniqueInput!) {\n        workspace(where: $workspaceWhere) {\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query myAssignWorkspacesOnPicker(\n        $workspaceWhere: WorkspaceWhereInput\n    ) {\n        workspaces(where: $workspaceWhere) {\n            __typename\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    query myAssignWorkspacesOnPicker(\n        $workspaceWhere: WorkspaceWhereInput\n    ) {\n        workspaces(where: $workspaceWhere) {\n            __typename\n            ...WorkspaceBaseFragment\n            profile {\n                __typename\n                ...WorkspaceProfileFragment\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;