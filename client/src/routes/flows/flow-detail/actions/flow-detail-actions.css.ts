import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';

export const FlowDetailActionsListCss = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spacing.sm,
});
