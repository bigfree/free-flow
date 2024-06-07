import { create } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';
import { produce } from 'immer';

type AccessTokenProps = {
    accessToken: string | null;
};

type AccessTokenAction = {
    getAccessToken: () => string | null;
    setAccessToken: (accessToken: string) => void;
    revokeAccessToken: () => void;
};

type AccessTokenStore = AccessTokenProps & AccessTokenAction;

const persistorConfig: PersistOptions<AccessTokenStore> = {
    name: 'access-token',
    storage: createJSONStorage(() => sessionStorage),
    version: 1,
};

const useAccessTokenStore = create<AccessTokenStore>()(
    persist(
        (set, get) => ({
            accessToken: null,
            getAccessToken: () => get().accessToken,
            setAccessToken: (accessToken: string) => {
                set(
                    produce((state) => {
                        state.accessToken = accessToken;
                    }),
                );
            },
            revokeAccessToken: () => {
                set(
                    produce((state) => {
                        state.accessToken = null;
                    }),
                );
            },
        }),
        persistorConfig,
    ),
);

export default useAccessTokenStore;
