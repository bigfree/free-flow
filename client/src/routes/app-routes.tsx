import { RouteObject } from 'react-router-dom';
import RootRoute from '@routes/root/root.route.tsx';
import IndexRoute from '@routes/index/index.route.tsx';

const appRootChildren: RouteObject[] = [
    {
        index: true,
        element: <IndexRoute />,
    },
];

export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: <RootRoute />,
        children: appRootChildren,
    },
];
