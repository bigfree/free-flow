import { FC, ReactElement } from 'react';
import { HeaderComponent } from '@components/app/header/header.css.ts';
import Me from '@components/app/header/me/me.component.tsx';
import { useQuery } from '@apollo/client';
import { MeQuery } from '@graphql/freeflow/me.query.ts';
import WorkspacePicker from '@components/workspace-picker/workspace-picker.component.tsx';
import Notification from '@components/app/header/notification/notification.component.tsx';
import { Divider, Flex, rem } from '@mantine/core';

const Header: FC = (): ReactElement => {
    const { data } = useQuery(MeQuery);

    return (
        <div className={HeaderComponent}>
            <div style={{ flex: 1 }}>Tab panel</div>
            <Flex align={'center'} gap={'sm'}>
                <WorkspacePicker />
                <Me
                    id={data?.me.id ?? ''}
                    email={data?.me.email ?? ''}
                    firstName={data?.me.profile?.firstName ?? ''}
                    lastName={data?.me.profile?.lastName ?? ''}
                    image={data?.me.profile?.avatar ?? ''}
                    username={data?.me.profile?.username}
                />
                <Divider orientation={'vertical'} style={{ alignSelf: 'center' }} h={rem(40)} />
                <Notification />
            </Flex>
        </div>
    );
};

export default Header;
