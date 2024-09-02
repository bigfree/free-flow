import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { lighten, rem } from '@mantine/core';
import { calc } from '@vanilla-extract/css-utils';

const RATIO_SIZE = 45;

export const cardColor = createVar();

export const RadioGroupCss = style({
    display: 'flex',
    width: '100%',
    gap: vars.spacing.sm,
});

export const RadioCardCss = style({
    height: rem(RATIO_SIZE),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: vars.colors.gray[5],
    boxShadow: `0 0 ${rem(5)} ${vars.colors.gray[2]}`,
});

export const RadioCardDescriptionCss = style({
    marginBottom: vars.spacing.xs,
});

export const RadioCardIconCss = style({
    flex: `0 0 ${rem(RATIO_SIZE)}`,
    height: rem(RATIO_SIZE),
    padding: vars.spacing.xs,
    color: vars.colors.gray[5],
});

export const RadioCardTextCss = style({
    fontWeight: 500,
    fontSize: vars.fontSizes.sm,
});

globalStyle(`${RadioCardCss}[data-checked="true"]`, {
    borderColor: calc(cardColor).toString(),
    boxShadow: `0 0 ${rem(5)} ${lighten(calc(cardColor).toString(), 0.5)}`,
});

globalStyle(`${RadioCardCss}[data-checked="true"] ${RadioCardIconCss}`, {
    color: calc(cardColor).toString(),
});
