import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const ActiveWorkspaceColor = createVar();

export const WorkspacePickerComponent = style({
    height: rem(60),
    paddingLeft: vars.spacing.sm,
    // backgroundColor: vars.colors.gray[1],
    // borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    // boxShadow: `${rem(4)} ${rem(4)} 0 0 ${ActiveWorkspaceColor}`,
    flex: `0 0 ${rem(240)}`,
    display: 'flex',
    alignItems: 'center',
});

export const ButtonContent = style({
    flex: 1,
    paddingLeft: vars.spacing.sm,
});

export const ButtonIcon = style({
    marginRight: vars.spacing.sm,
    width: rem(19),
    height: rem(19),
});

export const SpotlightAction = style({
    vars: {
        '--mantine-primary-color-filled': vars.colors.blue[3],
    },
});

export const SpotlightOptionGroup = style({
    padding: rem(2),
});

export const SpotlightLink = style({
    display: 'block',
    padding: `${vars.spacing.xs} ${vars.spacing.md}`,
});
