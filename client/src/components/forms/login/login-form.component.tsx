import { FC, ReactElement } from 'react';
import { Grid, PasswordInput, TextInput } from '@mantine/core';
import { useLoginFormContext } from '@common/form-context/login.context.ts';

const LoginForm: FC = (): ReactElement => {
    const form = useLoginFormContext();

    return (
        <Grid>
            <Grid.Col span={12}>
                <TextInput label={'Email'} placeholder={'Set your email'} {...form.getInputProps('email')} />
            </Grid.Col>
            <Grid.Col span={12}>
                <PasswordInput
                    label={'Password'}
                    placeholder={'Set your password'}
                    {...form.getInputProps('password')}
                />
            </Grid.Col>
        </Grid>
    );
};

export default LoginForm;
