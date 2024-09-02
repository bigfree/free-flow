import { style } from '@vanilla-extract/css';
import { rem, rgba } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const FlowToolbarNameCss = style({
    backgroundColor: rgba(vars.colors.white, 0.8),
    backdropFilter: 'blur(5px)',
    border: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    borderRadius: vars.radius.md,
    height: rem(40),
    paddingLeft: vars.spacing.xs,
    paddingRight: vars.spacing.xs,
    display: 'flex',
    alignItems: 'center',
    fontSize: vars.fontSizes.sm,
    marginRight: vars.spacing.md,
});

export const FlowToolbarButtonCss = style({
    backgroundColor: rgba(vars.colors.white, 0.8),
    backdropFilter: 'blur(5px)',
    border: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    borderRadius: vars.radius.md,
    width: rem(40),
    height: rem(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: rem(5),
});
