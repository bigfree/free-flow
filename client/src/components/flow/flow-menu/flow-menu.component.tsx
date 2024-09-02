import { FC, ForwardRefExoticComponent, Fragment, ReactElement, RefAttributes, useCallback } from 'react';
import {
    Icon,
    IconHistory,
    IconInfoCircle,
    IconLetterA,
    IconLetterN,
    IconProps,
    IconSettings,
} from '@tabler/icons-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
    FlowMenuCss,
    FlowMenuDividerCss,
    FlowMenuLinkActiveCss,
    FlowMenuLinkIconCss,
    FlowMenuLinkLabelCss,
    FlowMenuLinkNoActiveCss,
} from '@components/flow/flow-menu/flow-menu.css.ts';
import { Box, Divider } from '@mantine/core';

type LinkData = {
    link: string;
    label: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    divider: boolean;
};

const data: LinkData[] = [
    { link: 'nodes', label: 'Nodes', icon: IconLetterN, divider: false },
    { link: 'actions', label: 'Actions', icon: IconLetterA, divider: true },
    { link: 'info', label: 'Flow', icon: IconInfoCircle, divider: false },
    { link: 'history', label: 'History', icon: IconHistory, divider: false },
    { link: 'config', label: 'Config', icon: IconSettings, divider: false },
];

const FlowMenu: FC = (): ReactElement => {
    const { flowId } = useParams<{ flowId: string }>();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnClickLink = useCallback(
        (link: LinkData) => {
            if (location.pathname.endsWith(link.link)) {
                navigate(`/flows/${flowId}`);
            } else {
                navigate(link.link);
            }
        },
        [flowId, location.pathname, navigate],
    );

    return (
        <div className={FlowMenuCss}>
            {data.map((link) => (
                <Fragment key={link.label}>
                    <Box
                        className={
                            location.pathname.endsWith(link.link) ? FlowMenuLinkActiveCss : FlowMenuLinkNoActiveCss
                        }
                        onClick={() => handleOnClickLink(link)}
                    >
                        <link.icon className={FlowMenuLinkIconCss} stroke={1.7} />
                        <span className={FlowMenuLinkLabelCss}>{link.label}</span>
                    </Box>
                    {link.divider ? <Divider className={FlowMenuDividerCss} orientation={'horizontal'} /> : null}
                </Fragment>
            ))}
        </div>
    );
};

export default FlowMenu;
