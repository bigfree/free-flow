import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { lighten, rem } from '@mantine/core';

export const editBackgroundColor = createVar();
export const editWidth = createVar();
export const editHeight = createVar();
export const editRadius = createVar();

export const ActionPreviewCss = style({
    flex: 1,
    borderLeft: `${rem(1)} solid ${vars.colors.gray[2]}`,
    backgroundColor: vars.colors.gray[0],
    boxShadow: `inset 4px 0 0 0 ${vars.colors.gray[1]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const ActionPreviewBoxCss = style({
    width: editWidth,
    height: editHeight,
    background: lighten(editBackgroundColor, 0.98),
    border: `${rem(1)} solid ${vars.colors.gray[5]}`,
    // borderLeftWidth: rem(12),
    // borderLeftColor: editBackgroundColor,
    boxShadow: `${rem(0)} ${rem(0)} ${rem(10)} ${rem(1)} ${vars.colors.gray[4]}`,
    borderRadius: editRadius,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: rem(8),
    paddingRight: rem(8),
});

export const ActionPreviewIconCss = style({
    aspectRatio: '1/1',
    height: '60%',
    borderRadius: '100%',
    backgroundColor: editBackgroundColor,
    marginRight: vars.spacing.sm,
});

export const ActionPreviewLabel = style({
    fontSize: rem(10),
    lineHeight: 1,
    color: vars.colors.dimmed,
    marginBottom: rem(3),
});

export const ActionPreviewName = style({
    fontSize: vars.fontSizes.sm,
    lineHeight: 1.2,
    fontWeight: 500,
});

globalStyle(`${ActionPreviewIconCss} svg`, {
    width: '100%',
    height: '100%',
    padding: '16%',
    color: vars.colors.white,
});
