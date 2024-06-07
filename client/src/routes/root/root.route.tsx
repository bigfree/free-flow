// eslint-disable-next-line import/no-unresolved
import 'unfonts.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles/Button.css';
import '@mantine/spotlight/styles.css';
import { FC, ReactElement } from 'react';
import { AppShell, rem } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Aside from '@components/app/aside/aside.component.tsx';
import { RootAppHeader, RootAppMain, RootAppNavbar, RootAppOutletWrapper } from '@routes/root/root.css.ts';
import Header from '@components/app/header/header.component.tsx';

const RootRoute: FC = (): ReactElement => {
    return (
        <AppShell
            classNames={{
                header: RootAppHeader,
                main: RootAppMain,
                navbar: RootAppNavbar,
            }}
            withBorder={false}
            header={{
                height: rem(60),
            }}
            navbar={{
                width: rem(240),
                breakpoint: 'xs',
            }}
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Navbar>
                <Aside />
            </AppShell.Navbar>
            <AppShell.Main>
                {/* TODO: <Toolbar /> */}
                <div className={RootAppOutletWrapper}>
                    <Outlet />
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default RootRoute;
