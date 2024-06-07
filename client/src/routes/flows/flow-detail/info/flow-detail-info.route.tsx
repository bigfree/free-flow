import { FC, useCallback } from 'react';
import FlowDeck from '@/shared/flow-deck/flow-deck.module.tsx';
import FlowInfoForm from '@components/forms/flow/flow-info/flow-info-form.component.tsx';
import {
    FlowInfoFormProvider,
    FlowInfoFormSchema,
    FlowInfoFormValues,
    useFlowInfoForm,
} from '@common/form-context/flow-info.context.ts';
import { zodResolver } from '@mantine/form';
import { useMutation, useQuery } from '@apollo/client';
import { FlowDetailQuery } from '@graphql/freeflow/flow.query.ts';
import { Link, useParams } from 'react-router-dom';
import { FlowDetailMutation } from '@graphql/freeflow/mutation/flow.mutation.ts';
import { Button, Text } from '@mantine/core';
import {
    FlowDetailHeaderClose,
    FlowDetailHeaderId,
    FlowDetailHeaderInfo,
} from '@routes/flows/flow-detail/info/flow-detail-info.css.ts';
import { IconX } from '@tabler/icons-react';

const FlowDetailInfoRoute: FC = () => {
    const { flowId } = useParams<{ flowId: string }>();
    const { data } = useQuery(FlowDetailQuery, {
        variables: {
            where: {
                id: flowId,
            },
        },
    });
    const [updateFlow] = useMutation(FlowDetailMutation);

    const form = useFlowInfoForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            code: data?.flow.code ?? '',
            description: data?.flow.description ?? '',
            externalId: data?.flow.externalId ?? '',
            name: data?.flow.name ?? '',
        },
        validate: zodResolver(FlowInfoFormSchema),
    });

    const handleOnSubmitFlowInfo = useCallback(
        async (values: FlowInfoFormValues) => {
            await updateFlow({
                variables: {
                    data: {
                        code: {
                            set: values.code,
                        },
                        description: {
                            set: values.description,
                        },
                        externalId: {
                            set: values.externalId,
                        },
                        name: {
                            set: values.name,
                        },
                    },
                    where: {
                        id: flowId,
                    },
                },
            });
        },
        [flowId, updateFlow],
    );

    return (
        <FlowInfoFormProvider form={form}>
            <form onSubmit={form.onSubmit(handleOnSubmitFlowInfo)}>
                <FlowDeck.Aside>
                    <FlowDeck.AsideHeader>
                        <div>
                            <div className={FlowDetailHeaderInfo}>
                                <Text fw={500} p={'sm'} style={{ flex: 1, lineHeight: 1 }}>
                                    Flow information
                                </Text>
                                <Link to={`/flows/${flowId}`} className={FlowDetailHeaderClose}>
                                    <IconX stroke={1.6} />
                                </Link>
                            </div>
                            <Text className={FlowDetailHeaderId} c={'dimmed'}>
                                #{data?.flow.id}
                            </Text>
                        </div>
                    </FlowDeck.AsideHeader>
                    <FlowDeck.AsideBody>
                        <FlowInfoForm />
                    </FlowDeck.AsideBody>
                    <FlowDeck.AsideFooter>
                        <Button type={'submit'} fullWidth={true}>
                            Update
                        </Button>
                    </FlowDeck.AsideFooter>
                </FlowDeck.Aside>
            </form>
        </FlowInfoFormProvider>
    );
};

export default FlowDetailInfoRoute;
