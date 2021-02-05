import styles from '../styles/UsersCard.module.css'
import Link from 'next/link'

function UsersCard({ imgUrl, userName }) {
	return (
		<div className={`${styles.usersCard} animateCard`}>
			<img className={styles.avatar} src={imgUrl} alt={`avatar of ${userName}`} />
			<h3 className={styles.title}>@{userName}</h3>
			<Link href='/'>SEE PROFILE</Link>
		</div>
	)
}

export default UsersCard
