import { FC, ReactElement } from 'react';
import { Avatar, Menu } from '@mantine/core';
import { MeAvatarRootCss, MenuItemIcon } from '@components/app/header/me/me.css.ts';
import { IconLogout, IconUser } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

type MeProps = {
    id: string;
    image: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string | null | undefined;
};

const Me: FC<MeProps> = ({ image, email, firstName, lastName, username }): ReactElement => {
    return (
        <Menu width={200}>
            <Menu.Target>
                <Avatar
                    className={MeAvatarRootCss}
                    src={image}
                    color={'initials'}
                    name={`${firstName} ${lastName}`}
                    size={'md'}
                    radius={'md'}
                />
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>{`${firstName} ${lastName}`}</Menu.Label>
                <Menu.Item leftSection={<IconUser className={MenuItemIcon} />}>Profile</Menu.Item>
                <Menu.Item component={Link} to={'/logout'} leftSection={<IconLogout className={MenuItemIcon} />}>
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default Me;
