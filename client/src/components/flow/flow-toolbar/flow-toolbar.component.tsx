import { FC, ReactElement, useCallback } from 'react';
import FlowDeck from '@/shared/flow-deck/flow-deck.module.tsx';
import { FlowQuery } from '@/generated/freeFlow/graphql.ts';
import { useReactFlow } from 'reactflow';
import { Text, UnstyledButton } from '@mantine/core';
import { IconFocusCentered, IconRefresh, IconZoomIn, IconZoomOut } from '@tabler/icons-react';
import { FlowToolbarButtonCss, FlowToolbarNameCss } from '@components/flow/flow-toolbar/flow-toolbar.css.ts';
import useFlowStore, { FlowStore } from '@stores/flow.store.ts';
import { useShallow } from 'zustand/react/shallow';

type FlowToolbarProps = {
    flow: FlowQuery | undefined;
};

const selector = (state: FlowStore) => ({
    setNodes: state.setNodes,
    synchronize: state.synchronize,
});

const FlowToolbar: FC<FlowToolbarProps> = ({ flow }): ReactElement => {
    const { zoomIn, zoomOut, setCenter } = useReactFlow();
    const { setNodes, synchronize } = useFlowStore(useShallow(selector));

    const onClickResetNodes = useCallback(async () => {
        setNodes([]);
        await synchronize();
    }, [setNodes, synchronize]);

    return (
        <FlowDeck.Toolbar>
            <Text className={FlowToolbarNameCss}>{flow?.flow.name}</Text>
            <UnstyledButton className={FlowToolbarButtonCss} onClick={onClickResetNodes}>
                <IconRefresh />
            </UnstyledButton>
            <UnstyledButton className={FlowToolbarButtonCss} onClick={() => zoomIn()}>
                <IconZoomIn />
            </UnstyledButton>
            <UnstyledButton className={FlowToolbarButtonCss} onClick={() => zoomOut()}>
                <IconZoomOut />
            </UnstyledButton>
            <UnstyledButton className={FlowToolbarButtonCss} onClick={() => setCenter(0, 0)}>
                <IconFocusCentered />
            </UnstyledButton>
        </FlowDeck.Toolbar>
    );
};

export default FlowToolbar;
