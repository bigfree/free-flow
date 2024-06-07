import { FC, ReactElement } from 'react';
import Flow from '@components/flow/flow.component.tsx';
import FlowDeck from '@/shared/flow-deck/flow-deck.module.tsx';
import FlowMenu from '@components/flow/flow-menu/flow-menu.component.tsx';
import { Outlet } from 'react-router-dom';

const FlowDetailRoute: FC = (): ReactElement => {
    return (
        <FlowDeck>
            <FlowDeck.Workspace>
                <Flow />
            </FlowDeck.Workspace>
            <FlowDeck.FlowMenu>
                <FlowMenu />
            </FlowDeck.FlowMenu>
            <Outlet />
        </FlowDeck>
    );
};

export default FlowDetailRoute;
