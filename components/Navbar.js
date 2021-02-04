import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

const Navbar = ({ toggleSidebar }) => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={`${styles.logo} animate2`}>
					<FaGithubAlt />
					<Link href='/'>Git to Meet You!</Link>
				</div>
				<ul className={styles.navItems}>
					<li className='animate2'>
						<Link href='/' className={`${styles.link}`} onClick={toggleSidebar}>
							Home
						</Link>
					</li>
					<li className='animate2'>
						<Link href='/about' className={`${styles.link}`}>
							About
						</Link>
					</li>
					<li className='animate2'>
						<Link href='/test' className={`${styles.link} `}>
							Github Repo
						</Link>
					</li>
				</ul>
				<div className={`${styles.sidebarToggle} animate2`}>
					<FiMenu onClick={toggleSidebar}></FiMenu>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
