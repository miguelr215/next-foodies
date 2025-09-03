import Link from 'next/link'
import React from 'react'

import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import styles from './header.module.css';
import HeaderBackground from '../header-bg/header-bg';

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
						<li><Link href="/meals">Browse Meals</Link></li>
						<li><Link href="/community">Foodies Community</Link></li>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default Header