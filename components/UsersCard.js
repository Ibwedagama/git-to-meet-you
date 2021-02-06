import styles from '../styles/UsersCard.module.css'


function UsersCard({ imgUrl, userName }) {
	return (
		<div className={`${styles.usersCard} animateCard`}>
			<img className={styles.avatar} src={imgUrl} alt={`avatar of ${userName}`} />
			<h3 className={styles.title}>@{userName}</h3>
			<a href={`/user/${userName}`}>SEE PROFILE</a>
		</div>
	)
}

export default UsersCard
