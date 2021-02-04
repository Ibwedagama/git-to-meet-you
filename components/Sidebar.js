import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import { useEffect } from 'react'

const Sidebar = ({ toggleSidebar, sidebarOpen }) => {
	useEffect(() => {
		gsap.from('.animateSidebar', {
			opacity: 0,
			ease: 'expo.InOut',
			duration: 1,
			stagger: 0.2,
			x: -20,
		})
		return null
	}, [!sidebarOpen])

	return (
		<div className={sidebarOpen ? `${styles.sidebar} ${styles.open}` : `${styles.sidebar}`}>
			<div className={styles.closeButton}>
				<FiX onClick={toggleSidebar} />
			</div>
			<ul className={styles.navLink}>
				<li className='animateSidebar'>
					<Link href='/' active>
						Home
					</Link>
				</li>
				<li className='animateSidebar'>
					<Link href='/about'>About</Link>
				</li>
				<li className='animateSidebar'>
					<Link href='/'>Github Repo</Link>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
