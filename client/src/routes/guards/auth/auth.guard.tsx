import { FC, ReactElement } from 'react';
import useAccessTokenStore from '@stores/tokens/access-token.store.ts';
import useRefreshTokenStore from '@stores/tokens/refresh-token.store.ts';
import useAuthStore from '@stores/auth.store.ts';
import { Navigate } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

type AuthGuardProps = {
    children: ReactElement;
};

const AuthGuard: FC<AuthGuardProps> = ({ children }): ReactElement => {
    const accessToken: string | null = useAccessTokenStore((state) => state.accessToken);
    const refreshToken: string | null = useRefreshTokenStore((state) => state.refreshToken);
    const { hasHydrated, isLoggedIn } = useAuthStore(
        useShallow((state) => ({
            hasHydrated: state._hasHydrated,
            isLoggedIn: state.isLoggedIn,
        })),
    );
    // TODO: pouzit lepsie riesenie ako hook s useHydration();
    // const hasHydrated = useHydration(useAuthStore);

    // const { isLoggedIn, setLogin } = useAuthStore(
    //     useShallow((state) => ({
    //         isLoggedIn: state.isLoggedIn,
    //         setLogin: state.setLogin,
    //     })),
    // );

    /**
     * Som na stranke prvy krat, vobec som sa neprihlasil, alebo som odhlaseny
     *
     * @define
     * Potrebujem sa prihlasit
     */
    if (!accessToken && !refreshToken) {
        // TODO
        return <Navigate to={'/login'} replace={true} />;
    }

    /**
     * Bol som prihlaseny a zatvoril som pehliadac alebo som vypol pocitac
     * prisiel som na stranku po zapnuti / obnoveni
     *
     * @define
     * Potrebujem znova obnovit accessToken podla refresh tokenu a prihlasim sa
     */
    if (!accessToken && refreshToken) {
        // TODO
    }

    /**
     * Tento stav by nemal nikdy nastat, musel by si uzivatel sam odstranit
     * refresh token z local DB!
     *
     * @define
     * Toto je revoke stav, presmeruj na odhlasovaciu stranku
     */
    if (accessToken && !refreshToken) {
        // TODO
        console.log('aaaa');
        return <Navigate to={'logout'} replace={true} />;
    }

    /**
     * Mam nastavene ze nie som prihlaseny
     *
     * @define
     * Toto je revoke stav, presmeruj na odhlasovaciu stranku
     */
    if (hasHydrated && !isLoggedIn) {
        console.log(isLoggedIn);
        return <Navigate to={'logout'} replace={true} />;
    }

    /**
     * Som prihlaseny a mam validny stav, presiel som guardom
     */
    return children;
};

export default AuthGuard;
