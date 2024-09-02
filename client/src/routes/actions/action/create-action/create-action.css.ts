import { rem } from '@mantine/core';
import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';

export const ActionDetailCss = style({
    display: 'flex',
    flexFlow: 'column',
    flex: `0 0 ${rem(450)}`,
    minHeight: 1,
    minWidth: 0,
});

export const ActionDetailHeaderCss = style({
    display: 'flex',
    flex: `0 0 ${rem(60)}`,
    borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    backgroundColor: vars.colors.gray[0],
    alignItems: 'stretch',
});

export const ActionDetailHeaderTextCss = style({
    alignSelf: 'center',
    paddingLeft: vars.spacing.md,
    flex: 1,
});

export const ActionDetailHeaderCloseCss = style({
    flex: `0 0 ${rem(60)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: `${rem(1)} solid ${vars.colors.defaultBorder}`,
});

export const ActionDetailHeaderCloseIconCss = style({
    width: rem(30),
    height: rem(30),
    color: vars.colors.gray[7]
});

export const ActionDetailBodyCss = style({
    flex: 1,
    minWidth: 0,
});

export const ActionDetailFooterCss = style({
    padding: vars.spacing.md,
});
