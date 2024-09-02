import 'reactflow/dist/style.css';
import { FC, Fragment, ReactElement } from 'react';
import { Background, ReactFlow, useReactFlow, Node } from 'reactflow';
import { FlowContainer } from '@components/flow/flow.css.ts';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FlowDetailQuery } from '@graphql/freeflow/flow.query.ts';
import FlowToolbar from '@components/flow/flow-toolbar/flow-toolbar.component.tsx';
import { ActionsQueryFragmentFragment, FlowQuery } from '@/generated/freeFlow/graphql.ts';
import useFlowStore, { FlowData, FlowStore } from '@stores/flow.store.ts';
import { useShallow } from 'zustand/react/shallow';
import { useDrop, XYCoord } from 'react-dnd';
import { nanoid } from 'nanoid';

const selector = (state: FlowStore) => ({
    setActiveFlowId: state.setActiveFlowId,
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
    onNodeDragStart: state.onNodeDragStart,
    onNodeDragStop: state.onNodeDragStop,
    synchronize: state.synchronize,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setNode: state.setNode,
});

const Flow: FC = (): ReactElement => {
    const { flowId } = useParams<{ flowId: string }>();
    const { screenToFlowPosition } = useReactFlow();

    const {
        nodes,
        edges,
        setActiveFlowId,
        onNodesChange,
        onEdgesChange,
        onConnect,
        onNodeDragStop,
        synchronize,
        setNodes,
        setEdges,
        setNode,
    } = useFlowStore(useShallow(selector));

    const { data, error, loading } = useQuery(FlowDetailQuery, {
        variables: {
            where: {
                id: flowId,
            },
        },
        onCompleted: (data: FlowQuery) => {
            setActiveFlowId(flowId ?? '');
            setNodes(data.flow.data ?? []);
            setEdges(data.flow.edges ?? []);
        },
    });

    const [, drop] = useDrop(() => ({
        accept: 'Action',
        drop: async (item: ActionsQueryFragmentFragment, monitor) => {
            if (!monitor.canDrop()) {
                return;
            }

            const position: XYCoord | null = monitor.getClientOffset();

            if (!position) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { ['__typename']: _, ...restItem } = item;

            const newNode: Node<FlowData> = {
                id: nanoid(),
                position: screenToFlowPosition({
                    x: position.x,
                    y: position.y,
                }),
                data: restItem,
            };

            setNode(newNode);
            await synchronize();
        },
        // collect: (monitor: DropTargetMonitor) => ({
        //     isDone: monitor.didDrop()
        // }),
    }));

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error && 'No Flow found' === error.graphQLErrors[0].message) {
        return <Navigate to={'/404'} replace={true} />;
    }

    return (
        <Fragment>
            <FlowToolbar flow={data} />
            <ReactFlow
                ref={drop}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onNodeDragStop={onNodeDragStop}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                className={FlowContainer}
                snapToGrid={true}
            >
                <Background gap={10} />
            </ReactFlow>
        </Fragment>
    );
};

export default Flow;
