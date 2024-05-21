import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const RootAppNavbar = style({
    borderRight: `${rem(1)} solid ${vars.colors.defaultBorder}`
});