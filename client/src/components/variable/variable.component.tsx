import { FC, ReactElement, useCallback } from 'react';
import { VariableDataValues } from '@common/form-context/variable-info.context.ts';
import { ActionIcon, Group, Text, Tooltip } from '@mantine/core';
import { IconEdit, IconForms, IconHash, IconLogicOr, IconQuestionMark, IconTrash } from '@tabler/icons-react';
import {
    VariableActionsCss,
    VariableContentCss,
    VariableCss, VariableDescriptionCss,
    VariableIconBoxCss,
    VariableIconCss,
    VariableLabelCss,
    variableStyleColor,
} from '@components/variable/variable.css.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/theme/main.theme.ts';

type VariableProps = {
    data: VariableDataValues;
    onEdit: (variable: VariableDataValues) => void;
    onDelete: (variable: VariableDataValues) => void;
};

const Variable: FC<VariableProps> = ({ data, onEdit, onDelete }): ReactElement => {
    const handleOnClickEdit = useCallback(() => {
        onEdit(data);
    }, [data, onEdit]);

    const handleOnClickDelete = useCallback(() => {
        onDelete(data);
    }, [data, onDelete]);

    return (
        <div
            className={VariableCss}
            style={assignInlineVars({
                [variableStyleColor]:
                    data.type === 'text'
                        ? vars.colors.pink[6]
                        : data.type === 'numeric'
                            ? vars.colors.green[6]
                            : vars.colors.blue[6],
            })}
        >
            <div className={VariableIconBoxCss}>
                {data.type === 'text' ? (
                    <IconForms className={VariableIconCss} />
                ) : data.type === 'numeric' ? (
                    <IconHash className={VariableIconCss} />
                ) : (
                    <IconLogicOr className={VariableIconCss} />
                )}
            </div>
            <div className={VariableContentCss}>
                <Text className={VariableLabelCss}>Variable</Text>
                <Text truncate={'end'} miw={0} fz={'sm'} fw={500}>
                    {data.name}
                </Text>
            </div>
            <Group gap={5} className={VariableActionsCss}>
                <Tooltip label={'Edit variable'}>
                    <ActionIcon variant={'default'} onClick={handleOnClickEdit}>
                        <IconEdit stroke={1.5} size={18} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={'Delete variable'}>
                    <ActionIcon variant={'default'} onClick={handleOnClickDelete}>
                        <IconTrash stroke={1.5} size={18} />
                    </ActionIcon>
                </Tooltip>
            </Group>
            {data.description ? (
                <Tooltip label={data.description} multiline={true} maw={200}>
                    <div className={VariableDescriptionCss}>
                        <IconQuestionMark stroke={1.6} />
                    </div>
                </Tooltip>
            ) : null}
        </div>
    );
};

export default Variable;
