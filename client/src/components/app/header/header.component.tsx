import { FC, ReactElement } from 'react';
import { HeaderComponent } from '@components/app/header/header.css.ts';
import Me from '@components/app/header/me/me.component.tsx';
import { useQuery } from '@apollo/client';
import { MeQuery } from '@graphql/freeflow/me.query.ts';
import WorkspacePicker from '@components/workspace-picker/workspace-picker.component.tsx';

const Header: FC = (): ReactElement => {
    const { data } = useQuery(MeQuery);

    return (
        <div className={HeaderComponent}>
            <WorkspacePicker/>
            <div style={{ flex: 1 }}>Tab panel</div>
            <Me
                id={data?.me.id ?? ''}
                email={data?.me.email ?? ''}
                fullName={`${data?.me.profile?.firstName} ${data?.me.profile?.lastName}`}
                image={data?.me.profile?.avatar ?? ''}
                username={data?.me.profile?.username}
            />
        </div>
    );
};

export default Header;
