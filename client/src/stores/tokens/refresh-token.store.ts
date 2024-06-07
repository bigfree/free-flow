import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { produce } from 'immer';

type AccessTokenProps = {
    refreshToken: string | null;
};

type AccessTokenAction = {
    getRefreshToken: () => string | null;
    setRefreshToken: (accessToken: string) => void;
    revokeRefreshToken: () => void;
};

type AccessTokenStore = AccessTokenProps & AccessTokenAction;

const persistorConfig: PersistOptions<AccessTokenStore> = {
    name: 'refresh-token',
    version: 1,
};

const useRefreshTokenStore = create<AccessTokenStore>()(
    persist(
        (set, get) => ({
            refreshToken: null,
            getRefreshToken: () => get().refreshToken,
            setRefreshToken: (refreshToken: string) => {
                set(
                    produce((state) => {
                        state.refreshToken = refreshToken;
                    }),
                );
            },
            revokeRefreshToken: () => {
                set(
                    produce((state) => {
                        state.refreshToken = null;
                    }),
                );
            },
        }),
        persistorConfig,
    ),
);

export default useRefreshTokenStore;
