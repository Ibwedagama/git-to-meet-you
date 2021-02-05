import styles from '../styles/About.module.css'
import Head from 'next/head'
import Background from '../components/Background'
import { useEffect } from 'react'

const about = () => {

    useEffect(() => {
			gsapAnimation()
		}, [])
    
	return (
		<>
			<Head></Head>
			<Background />
			<div className={styles.about}>
				<h1 className={`${styles.title} animateAbout`}>About Git to Meet You!</h1>
				<p className={`${styles.subtitle} animateAbout`}>
					Hello everyone, I’m Ibwedagama. I created this app using{' '}
					<a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
						Next.Js
					</a>{' '}
					and{' '}
					<a
						href='https://docs.github.com/en/rest/reference/users'
						target='_blank'
						rel='noreferrer'
					>
						Github User API
					</a>{' '}
					. This project is a redesign from my previous{' '}
					<a href='https://wgithubfinder.netlify.app/' target='_blank' rel='noreferrer'>
						Github User Finder
					</a>{' '}
					project I build using{' '}
					<a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
						React.js
					</a>{' '}
					. Although it’s not perfect, but I learn so much from creating this project and yeah, it’s
					a lot of fun too! Also feel free to visit my{' '}
					<a href='https://github.com/Ibwedagama' target='_blank' rel='noreferrer'>
						Github Page
					</a>{' '}
					or my{' '}
					<a href='https://www.linkedin.com/in/ibwedagama/' target='_blank' rel='noreferrer'>
						Linkedin
					</a>{' '}
					profile if you interested to learn more about me. Thank you, have a nice day!
				</p>
			</div>
		</>
	)
}

const gsapAnimation = () => {
	gsap.from('.animateAbout', {
		opacity: 0,
		duration: 1.5,
		y: -30,
		ease: 'expo.InOut',
		delay: 0.5,
		stagger: 0.5,
	})
}

export default about
