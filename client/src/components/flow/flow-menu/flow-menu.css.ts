import { style } from '@vanilla-extract/css';
import { lighten, rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';
import { calc } from '@vanilla-extract/css-utils';

const FlowMenuLinkBaseCss = style({
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: rem(64),
    border: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    marginBottom: rem(7),
    borderRadius: vars.radius.sm,
    textDecoration: 'none',
    color: vars.colors.defaultColor,
    cursor: 'pointer',
    userSelect: 'none',
});

export const FlowMenuCss = style({
    display: 'flex',
    flexFlow: 'column',
    padding: rem(7),
});

export const FlowMenuLinkNoActiveCss = style([FlowMenuLinkBaseCss, {}]);

export const FlowMenuLinkActiveCss = style([
    FlowMenuLinkBaseCss,
    {
        color: vars.colors.primaryColors[5],
        borderColor: vars.colors.primaryColors[5],
        backgroundColor: lighten(vars.colors.primaryColors[0], 0.5),
    },
]);

export const FlowMenuLinkIconCss = style({
    flex: `0 0 ${rem(42)}`,
    width: '42%',
});

export const FlowMenuLinkLabelCss = style({
    lineHeight: 1,
    fontSize: vars.fontSizes.xs,
});

export const FlowMenuDividerCss = style({
    marginBottom: rem(7),
    marginLeft: calc(rem(7)).negate().toString(),
    marginRight: calc(rem(7)).negate().toString(),
});
