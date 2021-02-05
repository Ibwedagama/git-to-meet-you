import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
	const [sidebar, setSidebar] = useState(false)

	useEffect(() => {
		setSidebar(false)
	}, [children])

	const toggleSidebar = () => {
		setSidebar(!sidebar)
	}

	return (
		<div className={styles.layout}>
			<Head>
				<title>Git to Meet You!</title>
				<link rel='icon' href='/favicon.ico' />
				<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js'></script>
				<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/CSSRulePlugin.min.js'></script>
			</Head>
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar sidebarOpen={sidebar} toggleSidebar={toggleSidebar} />
			{children}
		</div>
	)
}

export default Layout
