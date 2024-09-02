import { style } from '@vanilla-extract/css';
import { lighten, rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';
import { calc } from '@vanilla-extract/css-utils';

const FlowMenuLinkBaseCss = style({
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: rem(56),
    border: `${rem(1)} solid transparent`,
    marginBottom: rem(8),
    borderRadius: vars.radius.sm,
    textDecoration: 'none',
    color: vars.colors.defaultColor,
    cursor: 'pointer',
    userSelect: 'none',
});

export const FlowMenuCss = style({
    display: 'flex',
    flexFlow: 'column',
    padding: rem(8),
});

export const FlowMenuLinkNoActiveCss = style([
    FlowMenuLinkBaseCss,
    {
        selectors: {
            '&:hover': {
                backgroundColor: vars.colors.gray[1],
            },
        },
    },
]);

export const FlowMenuLinkActiveCss = style([
    FlowMenuLinkBaseCss,
    {
        color: vars.colors.primaryColors[5],
        borderColor: vars.colors.primaryColors[5],
        backgroundColor: lighten(vars.colors.primaryColors[0], 0.5),
    },
]);

export const FlowMenuLinkIconCss = style({
    flex: `0 0 ${rem(36)}`,
    width: '36%',
});

export const FlowMenuLinkLabelCss = style({
    lineHeight: 1,
    fontSize: rem(10),
});

export const FlowMenuDividerCss = style({
    marginBottom: rem(8),
    marginLeft: calc(rem(8)).negate().toString(),
    marginRight: calc(rem(8)).negate().toString(),
});
