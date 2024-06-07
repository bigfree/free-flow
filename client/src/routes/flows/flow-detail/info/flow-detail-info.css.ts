import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { lighten, rem } from '@mantine/core';

export const FlowDetailHeaderInfo = style({
    borderBottom: `${rem(1)} solid ${lighten(vars.colors.defaultBorder, 0.4)}`,
    display: 'flex',
    alignItems: 'center'
});

export const FlowDetailHeaderClose = style({
    alignSelf: 'stretch',
    borderLeft: `${rem(1)} solid ${lighten(vars.colors.defaultBorder, 0.4)}`,
    width: rem(42),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: vars.colors.gray[7],
});

export const FlowDetailHeaderId = style({
    padding: vars.spacing.xs,
    fontSize: vars.fontSizes.sm,
});
