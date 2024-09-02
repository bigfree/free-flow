import { darken, lighten, rem } from '@mantine/core';
import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { calc } from '@vanilla-extract/css-utils';

export const variableStyleColor = createVar();

export const VariableCss = style({
    display: 'flex',
    position: 'relative',
    flexFlow: 'row',
    alignItems: 'stretch',
    width: '100%',
    border: `1px solid ${variableStyleColor}`,
    padding: vars.spacing.xs,
    paddingLeft: 0,
    borderRadius: vars.radius.sm,
    boxShadow: `0 0 ${rem(4)} ${lighten(variableStyleColor, 0.7)}`,
});

export const VariableIconBoxCss = style({
    flex: `0 0 ${rem(50)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
});

export const VariableIconCss = style({
    color: darken(variableStyleColor, 0.2),
});

export const VariableContentCss = style({
    minWidth: 0,
});

export const VariableLabelCss = style({
    fontSize: rem(9),
    lineHeight: 1,
    color: vars.colors.dimmed,
    fontWeight: 300,
});

export const VariableActionsCss = style({
    flexShrink: 0,
    marginLeft: 'auto',
});

export const VariableDescriptionCss = style({
    width: rem(20),
    height: rem(20),
    borderRadius: '100%',
    backgroundColor: variableStyleColor,
    position: 'absolute',
    top: calc(rem(8)).negate().toString(),
    left: calc(rem(8)).negate().toString(),
    cursor: 'pointer'
});

globalStyle(`${VariableDescriptionCss} svg`, {
    color: vars.colors.white,
    width: rem(20),
    height: rem(20),
    padding: rem(1)
});
