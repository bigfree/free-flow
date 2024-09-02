import { FC, Fragment, ReactElement } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { FlowsQuery } from '@graphql/freeflow/flows.query.ts';
import { myConfigVar } from '@stores/reactive.store.ts';
import { Link } from 'react-router-dom';
import { Button, Divider, Text } from '@mantine/core';
import { SortOrder } from '@/generated/freeFlow/graphql.ts';

const FlowsRoute: FC = (): ReactElement => {
    const myConfig = useReactiveVar(myConfigVar);
    const { data } = useQuery(FlowsQuery, {
        variables: {
            orderBy: {
                createdAt: {
                    sort: SortOrder.Desc
                }
            },
            where: {
                assignedWorkspaces: {
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
        <div style={{ flex: 1 }}>
            <div>
                <Button>New flow</Button>
            </div>
            <div>
                {data?.flows.map((flow) => (
                    <Fragment key={flow.id}>
                        <div>
                            <Link to={`/flows/${flow.id}`}>{flow.name}</Link>
                            <Text>{flow.code}</Text>
                            {flow.externalId}
                        </div>
                        <Divider />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default FlowsRoute;
