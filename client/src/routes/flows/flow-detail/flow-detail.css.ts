import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const FlowDesk = style({
    flex: 1,
});

export const FlowAside = style({
    flex: `0 0 ${rem(80)}`,
    borderLeft: `${rem(1)} solid ${vars.colors.defaultBorder}`,
});