import { FC, ReactElement } from 'react';
import { ActionsQueryFragmentFragment } from '@/generated/freeFlow/graphql.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
    ActionItemColorVar,
    ActionItemContentCss,
    ActionItemCss, ActionItemOpacityVar,
} from '@components/action/action-item/action-item.css.ts';
import { Avatar, MantineColor, rem, Text } from '@mantine/core';
import { useDrag } from 'react-dnd';

type ActionItemProps = {
    action: ActionsQueryFragmentFragment;
};

const ActionItem: FC<ActionItemProps> = ({ action }): ReactElement => {
    const [{opacity}, dragRef] = useDrag(() => ({
        type: 'Action',
        item: action,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    }));

    return (
        <div
            ref={dragRef}
            className={ActionItemCss}
            style={assignInlineVars({
                [ActionItemColorVar]: action.color,
                [ActionItemOpacityVar]: String(opacity)
            })}
        >
            <Avatar color={action.color as MantineColor} name={action.name} size={'md'} radius={'md'} />
            <div className={ActionItemContentCss}>
                <Text c={'dimmed'} fz={rem(11)} lh={1}>
                    Action
                </Text>
                <Text fw={500}>{action.name}</Text>
            </div>
            <div>
                {action.variables.length ? <div>data</div> : null}
                {action.description ? <div>aaa</div> : null}
            </div>
        </div>
    );
};

export default ActionItem;
