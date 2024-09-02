import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const ActionItemColorVar = createVar();
export const ActionItemOpacityVar = createVar();

export const ActionItemCss = style({
    borderRadius: vars.radius.sm,
    display: 'flex',
    border: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    // boxShadow: `0 0 ${rem(2)} ${lighten(ActionItemColorVar, 0.5)}`,
    minHeight: rem(56),
    alignItems: 'center',
    cursor: 'pointer',
    gap: vars.spacing.sm,
    paddingLeft: vars.spacing.xs,
    opacity: ActionItemOpacityVar,
});

export const ActionItemContentCss = style({
    flex: 1,
});
