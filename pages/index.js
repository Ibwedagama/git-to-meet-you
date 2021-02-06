import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Background from '../components/Background'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/router'

export default function Home() {
	const [users, setUsers] = useState('')
	const [ready, setReady] = useState(false)
	const router = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault()
		router.push({
			pathname: `/users/${users}`,
		})
	}

	useEffect(() => {
		gsapAnimation()
		setTimeout(() => {
			setReady(true)
		}, 2000)
	}, [])

	return (
		<>
			<Background ready={ready} />
			<div className={styles.home}>
				<div className={styles.hero}>
					<h1 className={`${styles.title} animate`}>Hi, Git to Meet You!</h1>
					<p className={`${styles.subtitle} animate`}>Find a Github User here :</p>
					<form onSubmit={handleSubmit}>
						<div className={styles.inputIcons}>
							<input
								type='text'
								className={`${styles.input} animate`}
								placeholder='Search user here...'
								onChange={(e) => setUsers(e.target.value)}
								value={users}
							/>
							<span className='animate'>
								<FiSearch />
							</span>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

const gsapAnimation = () => {
	gsap.from('.animate', {
		opacity: 0,
		y: -30,
		ease: 'expo.InOut',
		duration: 1.2,
		stagger: 0.3,
		delay: 0.5,
	})
	gsap.from('.animate2', {
		opacity: 0,
		x: -20,
		ease: 'expo.InOut',
		duration: 1,
		stagger: 0.3,
		delay: 0.5,
	})
	gsap.from('.animate3', {
		opacity: 0,
		ease: 'expo.InOut',
		duration: 1,
		delay: 2,
	})
}
