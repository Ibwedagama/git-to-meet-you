import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiSearch } from 'react-icons/fi'
import Sidebar from '../components/Sidebar'

export default function Home({toggleSidebar}) {
	
	useEffect(() => {
		gsapAnimation()
	}, [])

	return (
		<>
			
			<Background />
			<div className={styles.home}>
				<div className={styles.hero}>
					<h1 className={`${styles.title} animate`}>Hi, Git to Meet You!</h1>
					<p className={`${styles.subtitle} animate`}>Find a Github User here :</p>
					<form action='#'>
						<div className={styles.inputIcons}>
							<input
								type='text'
								className={`${styles.input} animate`}
								placeholder='Search user here...'
							/>
							<span className='animate'>
								<FiSearch />
							</span>
						</div>
					</form>
				</div>
				<Footer />
			</div>
		</>
	)
}

const gsapAnimation = () => {
	gsap.from('.animate', {
		opacity: 0,
		y: -30,
		ease: 'expo.InOut',
		duration: 1.5,
		stagger: 0.4,
		delay: 1,
	})
	gsap.from('.animate2', {
		opacity: 0,
		x: -20,
		ease: 'expo.InOut',
		duration: 1,
		stagger: 0.3,
		delay: 1,
	})
	gsap.from('.animate3', {
		opacity: 0,
		ease: 'expo.InOut',
		duration: 1,
		delay: 2.5,
	})
}
