import { style } from '@vanilla-extract/css';
import { rem, rgba } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const FlowDeckCss = style({
    flex: 1,
    display: 'flex',
    position: 'relative',
});

export const FlowDeckWorkspaceCss = style({
    flex: 1,
    position: 'relative',
});

export const FlowDeckFlowMenuCss = style({
    flex: `0 0 ${rem(76)}`,
    borderLeft: `${rem(1)} solid ${vars.colors.defaultBorder}`,
});

export const FlowDeckAsideCss = style({
    overflow: 'hidden',
    position: 'absolute',
    width: rem(380),
    border: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    top: rem(8),
    bottom: rem(8),
    right: rem(90),
    backgroundColor: rgba(vars.colors.white, 0.8),
    borderRadius: vars.radius.sm,
    backdropFilter: 'blur(5px)',
    display: 'flex',
    flexFlow: 'column',
});

export const FlowDeckAsideHeaderCss = style({
    borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    backgroundColor: vars.colors.gray[0],
});

export const FlowDeckAsideBodyCss = style({
    flex: 1,
    padding: vars.spacing.sm,
});

export const FlowDeckAsideFooterCss = style({
    padding: vars.spacing.sm,
});

export const FlowDeckToolbarCss = style({
    position: 'absolute',
    zIndex: 999,
    bottom: vars.spacing.md,
    left: vars.spacing.md,
    display: 'flex'
});