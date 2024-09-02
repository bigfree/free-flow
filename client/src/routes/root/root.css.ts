import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const RootAppNavbar = style({
    borderRight: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 98,
});

export const RootAppMain = style({
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
});

export const RootAppHeader = style({
    zIndex: 99,
});

export const RootAppOutletWrapper = style({
    flex: 1,
    display: 'flex',
    minHeight: 1,
});