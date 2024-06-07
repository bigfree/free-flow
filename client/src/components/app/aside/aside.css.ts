import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const AsideLink = style({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: vars.fontSizes.sm,
    padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
    borderRadius: vars.radius.sm,
    fontWeight: 500,
});

export const AsideLinkIcon = style({
    width: rem(25),
    height: rem(25),
    marginRight: vars.spacing.sm,
});