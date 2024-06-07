import { FC, ReactElement, useCallback } from 'react';
import {
    LoginFormProvider,
    LoginFormSchema,
    LoginFormValues,
    useLoginForm,
} from '@common/form-context/login.context.ts';
import { zodResolver } from '@mantine/form';
import LoginForm from '@components/forms/login/login-form.component.tsx';
import { Button } from '@mantine/core';
import useAuthStore from '@stores/auth.store.ts';
import { useShallow } from 'zustand/react/shallow';
import { Navigate } from 'react-router-dom';

const LoginRoute: FC = (): ReactElement => {
    const { isLoggedIn, setLogin } = useAuthStore(
        useShallow((state) => ({
            isLoggedIn: state.isLoggedIn,
            setLogin: state.setLogin,
        })),
    );

    /**
     * Creates a login form with the provided initial values and validation schema.
     */
    const form = useLoginForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: zodResolver(LoginFormSchema),
    });

    /**
     * Handles the form submission event for the login form.
     */
    const onSubmitLoginForm = useCallback(async (values: LoginFormValues) => {
        console.log(values);
        await setLogin(values);
    }, [setLogin]);

    if (isLoggedIn) {
        return <Navigate to={'/'} replace={true} />;
    }

    return (
        <LoginFormProvider form={form}>
            <form onSubmit={form.onSubmit(onSubmitLoginForm)}>
                <p>Login route</p>
                <LoginForm />
                <Button type={'submit'}>Login</Button>
            </form>
        </LoginFormProvider>
    );
};

export default LoginRoute;
