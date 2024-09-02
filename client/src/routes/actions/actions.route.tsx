import { FC, ReactElement } from 'react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { ActionsQuery } from '@graphql/freeflow/actions.query.ts';
import { myConfigVar } from '@stores/reactive.store.ts';
import { SortOrder } from '@/generated/freeFlow/graphql.ts';

type ActionsRouteProps = NonNullable<unknown>;

const ActionsRoute: FC<ActionsRouteProps> = (): ReactElement => {
    const myConfig = useReactiveVar(myConfigVar);
    const { data: actions } = useQuery(ActionsQuery, {
        variables: {
            orderBy: {
                createdAt: {
                    sort: SortOrder.Desc
                }
            },
            where: {
                actionsOnWorkspaces: {
                    every: {
                        workspaceId: {
                            equals: myConfig?.activeWorkspace?.id,
                        },
                    },
                },
            },
        },
    });

    return (
        <div>
            <Button component={Link} to={'create'}>
                Create action
            </Button>
            <div>{actions?.actions.map((action) => <Link style={{display: 'block'}} to={action.id} key={action.id}>{action.name}</Link>)}</div>
        </div>
    );
};

export default ActionsRoute;
