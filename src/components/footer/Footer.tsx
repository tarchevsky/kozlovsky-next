import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='footer flex flex-col gap-2 cont pt-16 pb-8'>
			<Link href='https://guild.moscow'>
				Василий Козловский / Официальный сайт
			</Link>
			<p>Все права защищены</p>
		</footer>
	)
}

export default Footer
