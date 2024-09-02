import { FC, ReactElement } from 'react';
import { ActionIcon } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';

type NotificationProps = NonNullable<unknown>;

const Notification: FC<NotificationProps> = (): ReactElement => {
    return (
        <ActionIcon size={40} variant={'light'} radius={'md'} mr={'sm'}>
            <IconBell size={25} />
        </ActionIcon>
    );
};

export default Notification;
