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

const flowDetailRouteChildren: RouteObject[] = [
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

const appRootChildren: RouteObject[] = [
    {
        index: true,
        element: <IndexRoute />,
    },
    {
        path: 'flows',
        children: flowsRouteChildren,
    },
];

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
