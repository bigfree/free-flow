import { persist, PersistOptions } from 'zustand/middleware';
import { create } from 'zustand';
import { produce } from 'immer';

const WORKSPACE_STORE_VERSION: number = 1;

type WorkspaceProps = {
    activeWorkspaceId: string | null;
};

type WorkspaceActions = {
    getActiveWorkspaceId: () => string | null;
    setActiveWorkspaceId: (workspaceId: string | null) => void;
    removeActiveWorkspaceId: () => void;
};

export type WorkspaceStore = WorkspaceProps & WorkspaceActions;

const persistorConfig: PersistOptions<WorkspaceStore> = {
    name: 'workspace',
    version: WORKSPACE_STORE_VERSION,
};

const useWorkspaceStore = create<WorkspaceStore>()(
    persist(
        (set, get) => ({
            activeWorkspaceId: null,
            getActiveWorkspaceId: () => {
                return get().activeWorkspaceId;
            },
            setActiveWorkspaceId: (workspaceId: string | null) => {
                set(
                    produce((state: WorkspaceStore) => {
                        state.activeWorkspaceId = workspaceId;
                    }),
                );
            },
            removeActiveWorkspaceId: () => {
                set(
                    produce((state: WorkspaceStore) => {
                        state.activeWorkspaceId = null;
                    }),
                );
            },
        }),
        persistorConfig,
    ),
);

export default useWorkspaceStore;
