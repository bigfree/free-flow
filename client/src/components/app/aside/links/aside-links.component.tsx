import { FC, ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import { Icon, IconDashboard, IconFunction, IconProps, IconStackMiddle, IconTopologyStar } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { AsideLink, AsideLinkIcon } from '@components/app/aside/aside.css.ts';

export type AsideLinkType = {
    link: string;
    label: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};

const data: AsideLinkType[] = [
    { link: '/', label: 'Dahsboard', icon: IconDashboard },
    { link: '/actions', label: 'Actions', icon: IconFunction },
    { link: '/nodes', label: 'Nodes', icon: IconStackMiddle },
    { link: '/flows', label: 'Flows', icon: IconTopologyStar },
];

const AsideLinks: FC = (): ReactElement => {
    return (
        <div>
            {data.map((link) => (
                <Link key={link.label} to={link.link} className={AsideLink}>
                    <link.icon className={AsideLinkIcon} />
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default AsideLinks;
