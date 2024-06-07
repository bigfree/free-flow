import { FC, ReactElement } from 'react';
import { Grid, Textarea, TextInput } from '@mantine/core';
import { useFlowInfoFormContext } from '@common/form-context/flow-info.context.ts';

const FlowInfoForm: FC = (): ReactElement => {
    const form = useFlowInfoFormContext();
    return (
        <Grid>
            <Grid.Col span={12}>
                <TextInput label={'Name'} {...form.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={12}>
                <TextInput label={'Code'} {...form.getInputProps('code')} />
            </Grid.Col>
            <Grid.Col span={12}>
                <TextInput label={'External ID'} {...form.getInputProps('externalId')} />
            </Grid.Col>
            <Grid.Col span={12}>
                <Textarea
                    label={'Description'}
                    {...form.getInputProps('description')}
                    minRows={3}
                    maxRows={5}
                    autosize={true}
                    maxLength={16000}
                />
            </Grid.Col>
        </Grid>
    );
};

export default FlowInfoForm;
