import { FC, ForwardRefExoticComponent, ReactElement, RefAttributes, useCallback, useEffect } from 'react';
import { Button, Grid, MantineColor, Radio, Text, Textarea, TextInput } from '@mantine/core';
import { Icon, IconForms, IconHash, IconLogicOr, IconProps } from '@tabler/icons-react';
import {
    cardColor,
    RadioCardCss,
    RadioCardDescriptionCss,
    RadioCardIconCss,
    RadioCardTextCss,
    RadioGroupCss,
} from '@common/modal-variable/modal-variable.css.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/theme/main.theme.ts';
import { nanoid } from 'nanoid';
import {
    ActionVariableObjectSchema,
    useVariableInfoForm,
    VariableDataValues,
    VariableInfoFormProvider,
} from '@common/form-context/variable-info.context.ts';
import { zodResolver } from '@mantine/form';

type ModalVariableProps = {
    variable?: VariableDataValues | null,
    onUpsertVariable: (values: VariableDataValues | null) => void;
};

type VariableTypeProps = {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    name: string;
    value: string;
    color: MantineColor;
};

const data: VariableTypeProps[] = [
    {
        name: 'Text',
        icon: IconForms,
        value: 'text',
        color: vars.colors.pink[6],
    },
    {
        name: 'Numeric',
        icon: IconHash,
        value: 'numeric',
        color: vars.colors.green[6],
    },
    {
        name: 'Boolean',
        icon: IconLogicOr,
        value: 'boolean',
        color: vars.colors.blue[6],
    },
];

const ModalVariable: FC<ModalVariableProps> = ({ variable, onUpsertVariable }): ReactElement => {
    const form = useVariableInfoForm({
        initialValues: {
            id: nanoid(),
            name: '',
            description: '',
            type: data[0].value,
        },
        validate: zodResolver(ActionVariableObjectSchema),
    });

    const handleOnClickCreateVariable = useCallback(() => {
        const validate = form.validate();
        if (validate.hasErrors) {
            onUpsertVariable(null);
            return;
        }

        onUpsertVariable(form.values);
    }, [form, onUpsertVariable]);

    useEffect(() => {
        if (variable) {
            form.setValues(variable);
        }
    }, [variable]);

    return (
        <VariableInfoFormProvider form={form}>
            <Grid>
                <Grid.Col span={12}>
                    <Radio.Group
                        description={'Choose the type of variable you want to add.'}
                        label={'Type'}
                        classNames={{
                            description: RadioCardDescriptionCss,
                        }}
                        {...form.getInputProps('type')}
                    >
                        <div className={RadioGroupCss}>
                            {data.map((item: VariableTypeProps) => (
                                <Radio.Card
                                    value={item.value}
                                    key={item.name}
                                    className={RadioCardCss}
                                    style={assignInlineVars({
                                        [cardColor]: item.color,
                                    })}
                                >
                                    <item.icon className={RadioCardIconCss} />
                                    <Text className={RadioCardTextCss}>{item.name}</Text>
                                </Radio.Card>
                            ))}
                        </div>
                    </Radio.Group>
                </Grid.Col>
                <Grid.Col span={12}>
                    <TextInput label={'Name'} {...form.getInputProps('name')} />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Textarea
                        label={'Description'}
                        minRows={2}
                        autosize={true}
                        maxLength={500}
                        {...form.getInputProps('description')}
                    />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Button type={'submit'} fullWidth={true} onClick={handleOnClickCreateVariable}>
                        {variable ? 'Save variable' : 'Create variable'}
                    </Button>
                </Grid.Col>
            </Grid>
        </VariableInfoFormProvider>
    );
};

export default ModalVariable;
