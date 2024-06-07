import { FC, ReactElement } from 'react';
import { IconDashboard, IconTopologyStar } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { AsideLink, AsideLinkIcon } from '@components/app/aside/aside.css.ts';

const data = [
    { link: '/', label: 'Dahsboard', icon: IconDashboard },
    { link: '/flows', label: 'Flows', icon: IconTopologyStar },
];

const AsideLinks: FC = (): ReactElement => {
    return (
        <div>
            {data.map((link) => (
                <Link key={link.label} to={link.link} className={AsideLink}>
                    <link.icon className={AsideLinkIcon}/>
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default AsideLinks;
