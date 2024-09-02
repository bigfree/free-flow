import { FC } from 'react';
import FlowDeck from '@/shared/flow-deck/flow-deck.module.tsx';
import { Text } from '@mantine/core';
import { FlowDetailHeaderClose, FlowDetailHeaderInfo } from '@routes/flows/flow-detail/info/flow-detail-info.css.ts';
import { Link, useParams } from 'react-router-dom';
import { IconX } from '@tabler/icons-react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { myConfigVar } from '@stores/reactive.store.ts';
import { ActionsQuery } from '@graphql/freeflow/actions.query.ts';
import { ActionsQueryFragmentFragment, SortOrder } from '@/generated/freeFlow/graphql.ts';
import ActionItem from '@components/action/action-item/action-item.component.tsx';
import { FlowDetailActionsListCss } from '@routes/flows/flow-detail/actions/flow-detail-actions.css.ts';

const FlowDetailActionsRoute: FC = () => {
    const { flowId } = useParams<{ flowId: string }>();
    const myConfig = useReactiveVar(myConfigVar);
    const { data: actions } = useQuery(ActionsQuery, {
        variables: {
            orderBy: {
                createdAt: {
                    sort: SortOrder.Desc,
                },
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
        <FlowDeck.Aside>
            <FlowDeck.AsideHeader>
                <div className={FlowDetailHeaderInfo}>
                    <Text fw={500} p={'sm'} style={{ flex: 1, lineHeight: 1 }}>
                        Actions
                    </Text>
                    <Link to={`/flows/${flowId}`} className={FlowDetailHeaderClose}>
                        <IconX stroke={1.6} />
                    </Link>
                </div>
            </FlowDeck.AsideHeader>
            <FlowDeck.AsideBody>
                <div className={FlowDetailActionsListCss}>
                    {actions?.actions.map((action: ActionsQueryFragmentFragment) => (
                        <ActionItem action={action} key={action.id} />
                    ))}
                </div>
            </FlowDeck.AsideBody>
        </FlowDeck.Aside>
    );
};

export default FlowDetailActionsRoute;
