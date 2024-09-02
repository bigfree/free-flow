import { FC, Fragment, ReactElement, useCallback, useState } from 'react';
import {
    Button,
    Center,
    ColorInput,
    Divider,
    Grid,
    Modal,
    NumberInput,
    Select,
    Text,
    Textarea,
    TextInput,
} from '@mantine/core';
import { useActionInfoFormContext } from '@common/form-context/action-info.context.ts';
import { ActionType } from '@/generated/freeFlow/graphql.ts';
import ModalVariable from '@common/modal-variable/modal-variable.component.tsx';
import { VariableDataValues } from '@common/form-context/variable-info.context.ts';
import { useDisclosure } from '@mantine/hooks';
import Variable from '@components/variable/variable.component.tsx';

type ActionDetailFormProps = NonNullable<unknown>;

const ActionDetailForm: FC<ActionDetailFormProps> = (): ReactElement => {
    const [openedModal, { open: openModal, close: closeModal }] = useDisclosure(false);
    const [editableVariable, setEditableVariable] = useState<VariableDataValues | null>(null);
    const form = useActionInfoFormContext();

    /**
     * Upserts a variable in the form values data array.
     *
     * @param {VariableDataValues | null} values - The values of the variable to be upserted.
     * @returns {void}
     */
    const upsertVariable = useCallback(
        (values: VariableDataValues | null) => {
            if (null === values) {
                return;
            }

            const isVariableExists = form.values.variables.find((item) => item.id === values.id);

            if (isVariableExists) {
                form.setFieldValue(
                    'data',
                    form.values.variables.map((item) => (item.id === values.id ? values : item)),
                );
            } else {
                form.setFieldValue('variables', [...form.values.variables, values]);
            }

            closeModal();
        },
        [closeModal, form],
    );

    /**
     * Handles the onDelete event for a given variable.
     *
     * @param {VariableDataValues} variable - The variable to be deleted.
     * @returns {void}
     */
    const onClickDeleteVariable = useCallback(
        (variable: VariableDataValues) => {
            form.setFieldValue('variables', [
                ...form.values.variables.filter((value: VariableDataValues) => value.id !== variable.id),
            ]);
        },
        [form],
    );

    /**
     * Function to handle click event on editing variable.
     *
     * @param {VariableDataValues} variable - The variable data to be edited.
     */
    const onClickEditVariable = useCallback(
        (variable: VariableDataValues) => {
            setEditableVariable(variable);
            openModal();
        },
        [openModal],
    );

    /**
     * Function that handles the click event to open a modal.
     * It sets the editable variable to null and calls the openModal function.
     *
     * @callback onClickOpenModal
     * @param {Function} openModal - A function to open the modal
     * @return {void}
     */
    const onClickOpenModal = useCallback(() => {
        setEditableVariable(null);
        openModal();
    }, [openModal]);

    return (
        <Fragment>
            <Grid p={'md'} miw={0}>
                <Grid.Col span={6}>
                    <ColorInput
                        label={'Color'}
                        format={'hex'}
                        withEyeDropper={false}
                        {...form.getInputProps('color')}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Grid>
                        <Grid.Col span={12}>
                            <Select
                                {...form.getInputProps('type')}
                                label={'Type'}
                                data={[
                                    {
                                        value: ActionType.Square,
                                        label: 'Square',
                                    },
                                    {
                                        value: ActionType.Circle,
                                        label: 'Circle',
                                    },
                                    {
                                        value: ActionType.Triangle,
                                        label: 'Triangle',
                                    },
                                ]}
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={4}>
                    <NumberInput label={'Width'} {...form.getInputProps('width')} min={50} step={10} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <NumberInput label={'Height'} {...form.getInputProps('height')} min={50} step={5} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <NumberInput label={'Radius'} {...form.getInputProps('radius')} min={0} step={1} />
                </Grid.Col>
            </Grid>
            <Divider orientation={'horizontal'} />
            <Grid p={'md'}>
                <Grid.Col span={12}>
                    <TextInput label={'Name'} {...form.getInputProps('name')} withAsterisk={true} />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Textarea
                        label={'Description'}
                        {...form.getInputProps('description')}
                        minRows={2}
                        autosize={true}
                    />
                </Grid.Col>
            </Grid>
            <Divider orientation={'horizontal'} />
            <Grid p={'md'} miw={0}>
                {form.values.variables && form.values.variables.map((variable: VariableDataValues) => (
                    <Grid.Col span={12} key={variable.id} miw={0}>
                        <Variable data={variable} onDelete={onClickDeleteVariable} onEdit={onClickEditVariable} />
                    </Grid.Col>
                ))}
                <Grid.Col span={12}>
                    <Button variant={'light'} fullWidth={true} color={'gray.6'} c={'blue.4'} onClick={onClickOpenModal}>
                        Add variable
                    </Button>
                </Grid.Col>
            </Grid>
            <Divider orientation={'horizontal'} />
            <Grid p={'md'}>
                <Grid.Col span={12}>
                    <TextInput label={'Class name'} {...form.getInputProps('class')} mb={'sm'} />
                    <Center>
                        <Text mb={'sm'} fz={'sm'}>
                            or paste code
                        </Text>
                    </Center>
                    <Textarea {...form.getInputProps('code')} rows={4} />
                </Grid.Col>
            </Grid>
            <Modal
                opened={openedModal}
                onClose={closeModal}
                title={editableVariable ? 'Edit variable' : 'Add variable'}
            >
                <ModalVariable onUpsertVariable={upsertVariable} variable={editableVariable} />
            </Modal>
        </Fragment>
    );
};

export default ActionDetailForm;
