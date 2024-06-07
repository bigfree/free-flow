import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';
import { create } from 'zustand';
import localForage from 'localforage';
import { produce } from 'immer';
import { LoginFormValues } from '@common/form-context/login.context.ts';
import { apolloClient } from '@configs/apollo-client.config.ts';
import { LoginMutation } from '@graphql/freeflow/mutation/login.mutation.ts';
import useAccessTokenStore from '@stores/tokens/access-token.store.ts';
import useRefreshTokenStore from '@stores/tokens/refresh-token.store.ts';

/**
 * Represents the version of the authentication store.
 * @type {number}
 */
const AUTH_STORE_VERSION: number = 1;

type AuthProps = {
    _hasHydrated: boolean;
    isLoggedIn: boolean;
    currentUserId: string | null;
};

type AuthActions = {
    getLoggedIn: () => boolean;
    setLogin: (loginFormValues: LoginFormValues) => Promise<void>;
    revokeLogin: () => void;
    setHasHydrated: (value: boolean) => void;
    getCurrentUserId: () => string | null;
};

export type AuthStore = AuthProps & AuthActions;

const authForageStore: LocalForage = localForage.createInstance({
    driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE],
    name: 'freeflow',
    storeName: 'auth',
    version: AUTH_STORE_VERSION,
});

const persistorConfig: PersistOptions<AuthStore> = {
    name: 'auth',
    storage: createJSONStorage(() => authForageStore),
    version: AUTH_STORE_VERSION,
    onRehydrateStorage: (state: AuthStore) => {
        state.setHasHydrated(true);
    },
};

const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            _hasHydrated: false,
            isLoggedIn: false,
            currentUserId: null,
            setHasHydrated: (value: boolean) => {
                set({
                    _hasHydrated: value,
                });
            },
            getLoggedIn: () => get().isLoggedIn,
            getCurrentUserId: () => get().currentUserId,
            setLogin: async (loginFormValues: LoginFormValues) => {
                // TODO: Add loading logic (loading, etc)
                const { data, errors } = await apolloClient.mutate({
                    mutation: LoginMutation,
                    variables: {
                        loginInput: loginFormValues,
                    },
                    fetchPolicy: 'network-only',
                });

                if (errors) {
                    set(
                        produce((state) => {
                            state.isLoggedIn = false;
                        }),
                    );
                }

                if (data) {
                    useAccessTokenStore.getState().setAccessToken(data.login.accessToken);
                    useRefreshTokenStore.getState().setRefreshToken(data.login.accessToken);
                    set(
                        produce((state: AuthStore) => {
                            state.isLoggedIn = true;
                            state.currentUserId = data.login.user.id;
                        }),
                    );
                }
            },
            revokeLogin: () => {
                useAccessTokenStore.getState().revokeAccessToken();
                useRefreshTokenStore.getState().revokeRefreshToken();
                set(
                    produce((state: AuthStore) => {
                        state.isLoggedIn = false;
                        state.currentUserId = null;
                    }),
                );
            },
        }),
        persistorConfig,
    ),
);

export default useAuthStore;
