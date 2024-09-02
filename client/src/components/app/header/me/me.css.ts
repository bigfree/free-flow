import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const MeComponent = style({
    backgroundColor: vars.colors.gray[0],
    borderLeft: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    cursor: 'pointer',
    paddingLeft: vars.spacing.sm,
    paddingRight: vars.spacing.sm,
});

export const MeAvatarRootCss = style({
    cursor: 'pointer',
});

// export const FullName = style({
//     fontSize: rem(13),
//     fontWeight: 500,
//     lineHeight: 1,
// });

export const Email = style({
    color: vars.colors.gray[8],
    fontSize: rem(12),
});

export const ChevronIcon = style({
    width: rem(18),
    color: vars.colors.gray[8],
});

export const MenuItemIcon = style({
    width: rem(15),
    height: rem(15),
});
