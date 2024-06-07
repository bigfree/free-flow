import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const HeaderComponent = style({
    borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
});
