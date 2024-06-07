import { FC, Fragment, ReactElement } from 'react';
import AsideLinks from '@components/app/aside/links/aside-links.component.tsx';

const Aside: FC = (): ReactElement => {
    return (
        <Fragment>
            <AsideLinks/>
        </Fragment>
    );
};

export default Aside;
