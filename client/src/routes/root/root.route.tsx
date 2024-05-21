import '@mantine/core/styles.css';
import '@mantine/core/styles/Button.css';
import { FC, ReactElement } from 'react';
import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Aside from '@components/app/aside/aside.component.tsx';
import { RootAppNavbar } from '@routes/root/root.css.ts';

const RootRoute: FC = (): ReactElement => {
    return (
        <AppShell classNames={{
            navbar: RootAppNavbar,
        }} withBorder={false} navbar={{
            width: 240,
            breakpoint: 'xs',
        }}>
            <AppShell.Navbar>
                <Aside />
            </AppShell.Navbar>
            <AppShell.Main>
                <div>Tab panel</div>
                <div>Toolbar</div>
                <div>
                    <Outlet />
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default RootRoute;