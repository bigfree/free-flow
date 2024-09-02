import { FC, ReactElement, Suspense, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { ActionDetailQuery } from '@graphql/freeflow/action.query.ts';
import {
    ActionInfoFormProvider,
    ActionInfoFormSchema,
    ActionInfoFormValues,
    useActionInfoForm,
} from '@common/form-context/action-info.context.ts';
import {
    ActionDetailBodyCss,
    ActionDetailCss,
    ActionDetailFooterCss,
    ActionDetailHeaderCloseCss,
    ActionDetailHeaderCloseIconCss,
    ActionDetailHeaderCss,
    ActionDetailHeaderTextCss,
} from '@routes/actions/action/create-action/create-action.css.ts';
import { Button, ScrollArea, Text } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import ActionDetailForm from '@components/forms/action/action-detail/action-detail.form.tsx';
import { ActionType } from '@/generated/freeFlow/graphql.ts';
import { zodResolver } from '@mantine/form';
import ActionPreview from '@components/action/action-preview/action-preview.component.tsx';
import { myConfigVar } from '@stores/reactive.store.ts';
import { ActionsQuery } from '@graphql/freeflow/actions.query.ts';
import { UpdateActionMutation } from '@graphql/freeflow/mutation/action.mutation.ts';

type DetailActionRouteProps = NonNullable<unknown>;

const DetailActionRoute: FC<DetailActionRouteProps> = (): ReactElement => {
    const myConfig = useReactiveVar(myConfigVar);

    const { actionId } = useParams<{ actionId: string }>();
    const { data: actionData } = useQuery(ActionDetailQuery, {
        variables: {
            where: {
                id: actionId,
                actionsOnWorkspaces: {
                    every: {
                        workspaceId: {
                            equals: myConfig?.activeWorkspace?.id,
                        },
                    },
                },
            },
        },
    });

    const [updateAction] = useMutation(UpdateActionMutation, {
        refetchQueries: [ActionsQuery],
    });

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

    const onSubmitUpdateAction = useCallback(
        async (values: ActionInfoFormValues) => {
            const applySet = (values: ActionInfoFormValues): { [key: string]: unknown } =>
                Object.fromEntries(
                    Object.entries(values)
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        .filter(([_key, value]) => value !== '' && value !== null)
                        .map(([key, value]) => [key, { set: value }]),
                );

            const processedValues = applySet(values);

            await updateAction({
                variables: {
                    data: {
                        ...processedValues,
                        variables: values.variables,
                    },
                    where: {
                        id: actionId,
                    },
                },
            });
        },
        [actionId, updateAction],
    );

    useEffect(() => {
        console.log(actionData);
        if (!actionData?.action) {
            return;
        }
        form.setValues({
            class: actionData.action.class,
            code: actionData.action.code ?? '',
            color: actionData.action.color,
            variables: actionData.action.variables,
            description: actionData.action.description ?? '',
            height: actionData.action.height,
            name: actionData.action.name,
            radius: actionData.action.radius,
            type: actionData.action.type,
            width: actionData.action.width,
        });
    }, [actionData]);

    return (
        <ActionInfoFormProvider form={form}>
            <form onSubmit={form.onSubmit(onSubmitUpdateAction)} className={ActionDetailCss}>
                <div className={ActionDetailHeaderCss}>
                    <Text className={ActionDetailHeaderTextCss} fw={500} fz={'lg'}>
                        {actionData?.action.name}
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
                        Update action
                    </Button>
                </div>
            </form>
            <Suspense fallback={null}>
                <ActionPreview />
            </Suspense>
        </ActionInfoFormProvider>
    );
};

export default DetailActionRoute;
