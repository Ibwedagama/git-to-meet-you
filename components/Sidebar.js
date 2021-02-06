import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'


const Sidebar = ({ toggleSidebar, sidebarOpen }) => {
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
