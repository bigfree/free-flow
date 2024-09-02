import { FC, ReactElement } from 'react';
import {
    ActionPreviewBoxCss,
    ActionPreviewCss,
    ActionPreviewIconCss,
    ActionPreviewLabel,
    ActionPreviewName,
    editBackgroundColor,
    editHeight,
    editRadius,
    editWidth,
} from '@components/action/action-preview/action-preview.css.ts';
import { useActionInfoFormContext } from '@common/form-context/action-info.context.ts';
import { ReactFlowProvider } from 'reactflow';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { rem, Text } from '@mantine/core';
import { IconAutomation } from '@tabler/icons-react';

type ActionPreviewProps = NonNullable<unknown>;

const ActionPreview: FC<ActionPreviewProps> = (): ReactElement => {
    const form = useActionInfoFormContext();

    return (
        <ReactFlowProvider>
            <div
                className={ActionPreviewCss}
                style={assignInlineVars({
                    [editBackgroundColor]: form.values.color,
                    [editWidth]: rem(form.values.width),
                    [editHeight]: rem(form.values.height),
                    [editRadius]: rem(form.values.radius),
                })}
            >
                {/*<Handle type={'target'} position={Position.Left} />*/}
                <div className={ActionPreviewBoxCss}>
                    <div className={ActionPreviewIconCss}>
                        <IconAutomation stroke={1.5} />
                    </div>
                    <div>
                        <Text className={ActionPreviewLabel}>Action</Text>
                        <Text className={ActionPreviewName}>{form.values.name}</Text>
                    </div>
                </div>
                {/*<Handle type={'source'} position={Position.Right} />*/}
            </div>
        </ReactFlowProvider>
    );
};

export default ActionPreview;
