import { FC, PropsWithChildren, ReactElement } from 'react';
import {
    FlowDeckAsideBodyCss,
    FlowDeckAsideCss, FlowDeckAsideFooterCss, FlowDeckAsideHeaderCss,
    FlowDeckCss,
    FlowDeckFlowMenuCss, FlowDeckToolbarCss,
    FlowDeckWorkspaceCss,
} from '@/shared/flow-deck/flow-deck.css.ts';

type FlowDeckProps = FC<PropsWithChildren> & {
    Workspace: FC<PropsWithChildren>;
    FlowMenu: FC<PropsWithChildren>;
    Aside: FC<PropsWithChildren>;
    AsideHeader: FC<PropsWithChildren>;
    AsideBody: FC<PropsWithChildren>;
    AsideFooter: FC<PropsWithChildren>;
    Toolbar: FC<PropsWithChildren>;
};

/**
 * FlowDeck component.
 */
// eslint-disable-next-line react/prop-types
const FlowDeck: FlowDeckProps = ({ children }): ReactElement => {
    return <div className={FlowDeckCss}>{children}</div>;
};

/**
 * FlowDeckWorkspace component.
 */
const Workspace: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return <div className={FlowDeckWorkspaceCss}>{children}</div>;
};

/**
 * FlowDeckRightMenu component.
 */
const FlowMenu: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return <div className={FlowDeckFlowMenuCss}>{children}</div>;
};

/**
 * FlowDeckAside component.
 */
const Aside: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return <div className={FlowDeckAsideCss}>{children}</div>;
};

/**
 * FlowDeckAsideHeader component.
 */
const AsideHeader: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return <div className={FlowDeckAsideHeaderCss}>{children}</div>;
};

/**
 * FlowDeckAsideBody component.
 */
const AsideBody: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return <div className={FlowDeckAsideBodyCss}>{children}</div>;
};

/**
 * FlowDeckAsideFooter component.
 */
const AsideFooter: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return <div className={FlowDeckAsideFooterCss}>{children}</div>;
};

/**
 * FlowDeckAsideFooter component.
 */
const Toolbar: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return <div className={FlowDeckToolbarCss}>{children}</div>;
};

FlowDeck.displayName = 'FlowDeck';
Workspace.displayName = 'FlowDeck.Workspace';
FlowMenu.displayName = 'FlowDeck.FlowMenu';
Aside.displayName = 'FlowDeck.Aside';
Aside.displayName = 'FlowDeck.AsideHeader';
Aside.displayName = 'FlowDeck.AsideBody';
Aside.displayName = 'FlowDeck.AsideFooter';
Aside.displayName = 'FlowDeck.Toolbar';

FlowDeck.Aside = Aside;
FlowDeck.AsideHeader = AsideHeader;
FlowDeck.AsideBody = AsideBody;
FlowDeck.AsideFooter = AsideFooter;
FlowDeck.Workspace = Workspace;
FlowDeck.FlowMenu = FlowMenu;
FlowDeck.Toolbar = Toolbar;

export default FlowDeck;
