import { FC, lazy, ReactElement, Suspense, useCallback } from 'react';
import {
    ActionInfoFormProvider,
    ActionInfoFormSchema,
    ActionInfoFormValues,
    useActionInfoForm,
} from '@common/form-context/action-info.context.ts';
import { zodResolver } from '@mantine/form';
import ActionDetailForm from '@components/forms/action/action-detail/action-detail.form.tsx';
import { Alert, Button, ScrollArea, Text } from '@mantine/core';
import {
    ActionDetailBodyCss,
    ActionDetailCss,
    ActionDetailFooterCss,
    ActionDetailHeaderCloseCss,
    ActionDetailHeaderCloseIconCss,
    ActionDetailHeaderCss,
    ActionDetailHeaderTextCss,
} from '@routes/actions/action/create-action/create-action.css.ts';
import { Link, useNavigate } from 'react-router-dom';
import { IconX } from '@tabler/icons-react';
import { ActionType } from '@/generated/freeFlow/graphql.ts';
import { useMutation } from '@apollo/client';
import { CreateActionMutation } from '@graphql/freeflow/mutation/action.mutation.ts';
import { ActionsQuery } from '@graphql/freeflow/actions.query.ts';

const ActionPreview = lazy(() => import('@components/action/action-preview/action-preview.component.tsx'));

type CreateActionRouteProps = NonNullable<unknown>;

const CreateActionRoute: FC<CreateActionRouteProps> = (): ReactElement => {
    const navigate = useNavigate();

    const form = useActionInfoForm({
        mode: 'controlled',
        initialValues: {
            color: '#efefefef',
            type: ActionType.Square,
            width: 100,
            height: 50,
            radius: 0,
            name: '',
            description: '',
            class: '',
            variables: [],
        },
        validate: zodResolver(ActionInfoFormSchema),
    });

    const [createAction, { error }] = useMutation(CreateActionMutation, {
        refetchQueries: [ActionsQuery],
        update: (_cache, { data }) => {
            navigate(`../${data?.createAction.id}`);
        },
    });

    const handleOnSubmitActionDetail = useCallback(
        async (values: ActionInfoFormValues) => {
            await createAction({
                variables: {
                    data: values,
                },
            });
        },
        [createAction],
    );

    return (
        <ActionInfoFormProvider form={form}>
            <form onSubmit={form.onSubmit(handleOnSubmitActionDetail)} className={ActionDetailCss}>
                {error ? (
                    <Alert color={'red.5'} radius={0}>
                        {error?.message}
                    </Alert>
                ) : null}
                <div className={ActionDetailHeaderCss}>
                    <Text className={ActionDetailHeaderTextCss} fw={500} fz={'lg'}>
                        Create action
                    </Text>
                    <Link to={'..'} className={ActionDetailHeaderCloseCss}>
                        <IconX className={ActionDetailHeaderCloseIconCss} stroke={1.5} />
                    </Link>
                </div>
                <ScrollArea scrollbars={'y'} className={ActionDetailBodyCss}>
                    <ActionDetailForm />
                </ScrollArea>
                <div className={ActionDetailFooterCss}>
                    <Button fullWidth={true} type={'submit'}>
                        Create action
                    </Button>
                </div>
            </form>
            <Suspense fallback={null}>
                <ActionPreview />
            </Suspense>
        </ActionInfoFormProvider>
    );
};

export default CreateActionRoute;
