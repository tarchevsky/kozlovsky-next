'use client'

import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'
import Burger from '@/components/burger/Burger'
import { useEffect, useState } from 'react'

interface Props {
	className?: string
}

const Header = ({className}: Props) => {
	const [isMenuActive, setIsMenuActive] = useState(false)

	const menuItems = [
		{ path: '/', label: 'Главная' },
		{ path: '/contacts', label: 'Контакты' }
	]

	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuActive])

	return (
		<header className={`${className ? className + ' ' : ''}cont flex justify-between items-center`}>
			<Link href='/' className='my-5 text-[20px] xl:text-[32px]'>
				Василий Козловский
				<br /> Художник / Проекты
			</Link>
			<nav
				className={cn(
					{ [styles.active]: isMenuActive },
					'fixed z-10 top-[100px] md:top-16 right-0 md:right-44 md:left-auto opacity-0 transition-all duration-300 ease-out'
				)}
			>
				<ul
					tabIndex={0}
					className='menu w-44 rounded-3xl'
				>
					{menuItems.map((item, index) => (
						<li
							key={index}
							className={cn(
								styles.item,
							)}
						>
							<Link
								href={item.path}
								className='text-[20px]'
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Burger toggleMenu={toggleMenu} />
		</header>
	)
}

export default Header