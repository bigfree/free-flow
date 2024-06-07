import { FC, ReactElement, useEffect } from 'react';
import useAuthStore from '@stores/auth.store.ts';
import { apolloClient, persistor } from '@configs/apollo-client.config.ts';
import { useShallow } from 'zustand/react/shallow';
import { Navigate } from 'react-router-dom';

const LogoutRoute: FC = (): ReactElement => {
    const { hasHydrated, isLoggedIn, revokeLogin } = useAuthStore(
        useShallow((state) => ({
            hasHydrated: state._hasHydrated,
            isLoggedIn: state.isLoggedIn,
            revokeLogin: state.revokeLogin,
        })),
    );

    useEffect(() => {
        const processLogout = async () => {
            // Logout user
            revokeLogin();
            // Clear store from apollo
            await apolloClient.clearStore();
            // Clear store from persist apollo
            await persistor.purge();
        };

        processLogout();
    }, [revokeLogin]);

    if (!isLoggedIn) {
        return <Navigate to={'/'} replace={true}/>
    }

    return (
        <div>
            <p>Odhlasenie sa nepodarilo!</p>
            <hr/>
            hasHydrated: {JSON.stringify(hasHydrated)} <br/>
            isLoggedIn: {JSON.stringify(isLoggedIn)} <br/>
        </div>
    )
};

export default LogoutRoute;
