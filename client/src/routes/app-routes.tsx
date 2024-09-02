import { RouteObject } from 'react-router-dom';
import RootRoute from '@routes/root/root.route.tsx';
import IndexRoute from '@routes/index/index.route.tsx';
import SignupRoute from '@routes/authorization/signup/signup.route.tsx';
import LoginRoute from '@routes/authorization/login/login.route.tsx';
import LogoutRoute from '@routes/authorization/logout/logout.route.tsx';
import AuthGuard from '@routes/guards/auth/auth.guard.tsx';
import FlowsRoute from '@routes/flows/flows.route.tsx';
import FlowDetailRoute from '@routes/flows/flow-detail/flow-detail.route.tsx';
import FlowDetailInfoRoute from '@routes/flows/flow-detail/info/flow-detail-info.route.tsx';
import FlowDetailHistoryRoute from '@routes/flows/flow-detail/history/flow-detail-history.route.tsx';
import FlowDetailConfigRoute from '@routes/flows/flow-detail/config/flow-detail-config.route.tsx';
import ActionsRoute from '@routes/actions/actions.route.tsx';
import DetailActionRoute from '@routes/actions/action/detail-action/detail-action.route.tsx';
import CreateActionRoute from '@routes/actions/action/create-action/create-action.route.tsx';
import FlowDetailActionsRoute from '@routes/flows/flow-detail/actions/flow-detail-actions.route.tsx';

/**
 * An array of route objects that represent the child routes for the Flow Detail route.
 *
 * @type {Array<RouteObject>}
 */
const flowDetailRouteChildren: RouteObject[] = [
    {
        path: 'actions',
        element: <FlowDetailActionsRoute />,
    },
    {
        path: 'info',
        element: <FlowDetailInfoRoute />,
    },
    {
        path: 'history',
        element: <FlowDetailHistoryRoute />,
    },
    {
        path: 'config',
        element: <FlowDetailConfigRoute />,
    },
];

/**
 * Represents an array of route objects for managing the flow routes.
 * @type {RouteObject[]}
 */
const flowsRouteChildren: RouteObject[] = [
    {
        index: true,
        element: <FlowsRoute />,
    },
    {
        path: ':flowId',
        element: <FlowDetailRoute />,
        children: flowDetailRouteChildren,
    },
];

/**
 * Represents an array of route objects for nodes.
 * @type {RouteObject[]}
 */
const nodesRouteChildren: RouteObject[] = [
    {
        index: true,
        element: <div>nodes</div>,
    },
    {
        path: 'create',
        element: <div>create node</div>,
    },
    {
        path: ':nodeId',
        element: <div>detail node</div>,
    },
];

/**
 * An array of route objects representing the children routes of the "actions" route.
 * @type {RouteObject[]}
 */
const actionsRouteChildren: RouteObject[] = [
    {
        index: true,
        element: <ActionsRoute />,
    },
    {
        path: 'create',
        element: <CreateActionRoute />,
    },
    {
        path: ':actionId',
        element: <DetailActionRoute />,
    },
];

/**
 * Represents the children routes for the app root.
 * @type {RouteObject[]}
 */
const appRootChildren: RouteObject[] = [
    {
        index: true,
        element: <IndexRoute />,
    },
    {
        path: 'actions',
        children: actionsRouteChildren,
    },
    {
        path: 'nodes',
        children: nodesRouteChildren,
    },
    {
        path: 'flows',
        children: flowsRouteChildren,
    },
];

/**
 * Array of route objects for the application.
 * @type {RouteObject[]}
 */
export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: (
            <AuthGuard>
                <RootRoute />
            </AuthGuard>
        ),
        children: appRootChildren,
    },
    {
        path: 'signup',
        element: <SignupRoute />,
    },
    {
        path: 'login',
        element: <LoginRoute />,
    },
    {
        path: 'logout',
        element: <LogoutRoute />,
    },
];
