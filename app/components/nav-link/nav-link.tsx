'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './nav-link.module.css';

type NavLinkProps = {
    href: string,
    children: ReactNode,
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? styles.active : undefined}>
            {children}
        </Link>
    )
}

export default NavLink