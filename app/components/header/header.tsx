import Link from 'next/link'
import React from 'react'

import logoImg from '@/assets/logo.png';
import Image from 'next/image';

const Header = () => {
	return (
		<header>
			<Link href="/">
				<Image src={logoImg.src} alt="logo" width={50} height={50} />
				NextLevel Food
			</Link>
			<nav className='w-full md:w-1/2 bg-amber-100 p-3'>
				<ul className='flex justify-center gap-4 md:gap-10'>
					<li><Link href="/meals">Browse Meals</Link></li>
					<li><Link href="/community">Foodies Community</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header