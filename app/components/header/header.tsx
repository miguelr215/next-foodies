import React from 'react'
import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import styles from './header.module.css';
import HeaderBackground from '../header-bg/header-bg';
import NavLink from '../nav-link/nav-link';

const Header = () => {
	return (
		<div className='relative'>
			<HeaderBackground />
			<header className={styles.header}>
				<Link href="/" className={styles.logo}>
					<Image src={logoImg} alt="logo" priority />
					<span className='hidden sm:inline'>NextLevel Food</span>
				</Link>
				<nav className={styles.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default Header