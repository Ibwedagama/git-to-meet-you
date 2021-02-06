import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import styles from '../../styles/Users.module.css'
import UsersCard from '../../components/UsersCard'
import NotFound from '../../components/UserNotFound'

const users = ({ data }) => {
	const router = useRouter()
	const { users } = router.query

	useEffect(() => {
		gsapAnimation()
	}, [data])

	let notFound = null

	console.log(data.total_count)

	if (data.total_count < 1) {
		console.log('not found')
		notFound = <NotFound />
	} 

	return (
		<div className={styles.wrapper}>
			<div className={styles.users}>
				<section className={styles.searchBar}>
					<p className={styles.subtitle}>Find Github user here :</p>
					<SearchBar searchValue={users} />
				</section>
			</div>
			<div className={styles.cardContainer}>
				<p className={`${styles.subtitle} ${styles.secondary}`}>Search result for "{users}" :</p>
				{notFound}
				<div className={styles.cardList}>
					{data.items.map((user) => {
						return <UsersCard key={user.id} imgUrl={user.avatar_url} userName={user.login} />
					})}
				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	const res = await fetch(`https://api.github.com/search/users?q=${params.users}&per_page=9`)
	const data = await res.json()
	return {
		props: {
			data,
		},
	}
}

const gsapAnimation = () => {
	gsap.from('.animateCard', {
		opacity: 0,
		y: 30,
		duration: 1,
		ease: 'expo.Out',
		stagger: 0.2,
	})
}
export default users
