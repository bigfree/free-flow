import { FC, ReactElement } from 'react';
import { Avatar, Flex, Menu, rem, Text, UnstyledButton } from '@mantine/core';
import { ChevronIcon, MeComponent, MenuItemIcon } from '@components/app/header/me/me.css.ts';
import { IconChevronRight, IconLogout, IconUser } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

type MeProps = {
    id: string;
    image: string;
    email: string;
    fullName: string;
    username: string | null | undefined;
};

const Me: FC<MeProps> = ({ image, email, fullName, username }): ReactElement => {
    return (
        <Menu width={200}>
            <Menu.Target>
                <UnstyledButton className={MeComponent}>
                    <Flex align={'center'} gap={'xs'}>
                        <Avatar src={image} radius={'xl'} />
                        <div>
                            <Text size={'sm'} fw={500} lh={rem(16)}>
                                {fullName}
                            </Text>
                            <Text c={'dimmed'} size={'xs'}>
                                {email}
                            </Text>
                        </div>
                        <IconChevronRight className={ChevronIcon} />
                    </Flex>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>{username ?? 'User'}</Menu.Label>
                <Menu.Item leftSection={<IconUser className={MenuItemIcon} />}>Profile</Menu.Item>
                <Menu.Item component={Link} to={'/logout'} leftSection={<IconLogout className={MenuItemIcon} />}>
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default Me;
