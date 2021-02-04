import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className={`${styles.footer} animate3`}>
			<p>
				<strong>Git to Meet You! </strong>
				created by{' '}
				<Link href='https://www.linkedin.com/in/ibwedagama/' target='_blank'>
					Ibwedagama
				</Link>{' '}
				using{' '}
				<Link href='https://nextjs.org/' target='_blank'>
					Next.js
				</Link>{' '}
				and{' '}
				<Link href='https://docs.github.com/en/rest/reference/users' target='_blank'>
					Github User API
				</Link>
			</p>
		</div>
	)
}

export default Footer
