import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Connection,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
} from 'reactflow';
import { create } from 'zustand';
import { produce } from 'immer';
import { apolloClient } from '@configs/apollo-client.config.ts';
import { FlowDetailMutation } from '@graphql/freeflow/mutation/flow.mutation.ts';
import { Action } from '@/generated/freeFlow/graphql.ts';


export type FlowData = Omit<Action, '_count' | '__typename' | 'actionsOnWorkspaces'>;

type FlowProps = {
    activeFlowId: string | null;
    nodes: Node<FlowData>[];
    edges: Edge[];
};

type FlowActions = {
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    onNodeDragStart: () => void;
    onNodeDragStop: () => void;
    onDrop: () => void;
    setNodes: (nodes: Node<FlowData>[]) => void;
    setEdges: (edges: Edge[]) => void;
    setNode: (node: Node) => void;
    setActiveFlowId: (flowId: string) => void;
    synchronize: () => Promise<void>;
};

export type FlowStore = FlowProps & FlowActions;

const useFlowStore = create<FlowStore>()((set, get) => ({
    activeFlowId: null,
    nodes: [],
    edges: [],
    setActiveFlowId: (flowId: string) => {
        set(
            produce((state: FlowStore) => {
                state.activeFlowId = flowId;
            }),
        );
    },
    onNodesChange: (changes: NodeChange[]) => {
        set(
            produce((state: FlowStore) => {
                state.nodes = applyNodeChanges(changes, state.nodes);
            }),
        );
    },
    onEdgesChange: async (changes: EdgeChange[]) => {
        set(
            produce((state: FlowStore) => {
                state.edges = applyEdgeChanges(changes, state.edges);
            }),
        );

        await get().synchronize();
    },
    onConnect: async (connection: Connection) => {
        set(
            produce((state: FlowStore) => {
                state.edges = addEdge(connection, state.edges);
            }),
        );

        await get().synchronize();
    },
    onNodeDragStart: async () => {
        await get().synchronize();
    },
    onNodeDragStop: async () => {
        await get().synchronize();
    },
    onDrop: async () => {
        await get().synchronize();
    },
    setNodes: (nodes: Node<FlowData>[]) => {
        set(
            produce((state: FlowStore) => {
                state.nodes = nodes;
            }),
        );
    },
    setEdges: (edges: Edge[]) => {
        set(
            produce((state: FlowStore) => {
                state.edges = edges;
            }),
        );
    },
    setNode: (node: Node<FlowData>) => {
        set(
            produce((state: FlowStore) => {
                state.nodes = [...state.nodes, node];
            }),
        );
    },
    synchronize: async () => {
        if (null === get().activeFlowId) {
            return;
        }
        console.log(get().nodes);
        await apolloClient.mutate({
            mutation: FlowDetailMutation,
            variables: {
                where: {
                    id: get().activeFlowId,
                },
                data: {
                    data: get().nodes,
                    edges: get().edges,
                },
            },
            update: (cache, result) => {
                const flowId = cache.identify(result?.data?.updateFlow ?? {});
                cache.modify({
                    id: flowId,
                    fields: {
                        data(cachedData) {
                            return [...cachedData, ...get().nodes];
                        },
                        edges(_cachedEdge) {
                            return get().edges;
                        },
                    },
                });
            },
        });
    },
}));

export default useFlowStore;
