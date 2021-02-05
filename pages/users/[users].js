import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import styles from '../../styles/Users.module.css'

const users = ({ data }) => {
	const router = useRouter()
	const { users } = router.query
	const [fetchedUsers, setfetchedUsers] = useState(null)
	console.log(data)

	// useEffect(() => {
	// 	setfetchedUsers(data.items)
	// }, [])

	return (
		<div className={styles.users}>
			<section className={styles.searchBar}>
				<p className={styles.subtitle}>Find Github user here :</p>
				<SearchBar searchValue={users} />
			</section>
			<section className={styles.cardContainer}></section>
		</div>
	)
}

// export async function getServerSideProps({ params }) {
// 	const res = await fetch(`https://api.github.com/search/users?q=${params.users}&per_page=5`)
// 	const data = await res.json()

// 	return {
// 		props: {
// 			data,
// 		},
// 	}
// }

export default users
