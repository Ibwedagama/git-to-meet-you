import styles from '../../styles/User.module.css'
import { FiMapPin } from 'react-icons/fi'
import { FiCalendar } from 'react-icons/fi'
import RepoCard from '../../components/RepoCard'
import moment from 'moment'
import { useEffect } from 'react'
import Head from 'next/head'

const User = ({ userData, userRepos }) => {
	useEffect(() => {
		gsapAnimation()
	}, [])

	return (
		<div className={styles.wrapper}>
			<Head>
				<title> {userData.login} | Git to Meet You!</title>
			</Head>
			<section className={styles.banner}>
				<img
					src={userData.avatar_url}
					alt={`avatar of ${userData.login}`}
					className={styles.avatar}
				/>
				<h3 className={styles.title}>{userData.name}</h3>
				<a href={userData.html_url} target='_blank' rel='noopener' className={styles.subtitle}>
					@{userData.login}
				</a>
				<div className={styles.userInfo}>
					<p>
						<span>
							<FiMapPin />
						</span>
						{userData.location}
					</p>
					<p>
						<span>
							<FiCalendar />
						</span>
						Joined {moment(userData.created_at).format('MMMM Do YYYY')}
					</p>
				</div>
			</section>
			<section className={styles.userRepos}>
				<div className={styles.userNumbers}>
					<div className={styles.followerCard}>
						<h3>{userData.followers}</h3>
						<p>FOLLOWERS</p>
					</div>
					<div className={styles.followerCard}>
						<h3>{userData.following}</h3>
						<p>FOLLOWING</p>
					</div>
					<div className={styles.followerCard}>
						<h3>{userData.public_repos}</h3>
						<p>PUBLIC REPOS</p>
					</div>
				</div>
				<h3 className={styles.repoHeader}>Public Repositories</h3>
				<div className={styles.repoList}>
					{userRepos.map((repo) => {
						return (
							<RepoCard
								key={repo.id}
								repoTitle={repo.name}
								repoDesc={repo.description}
								repoLang={repo.language}
								repoStars={repo.stargazers_count}
								repoFork={repo.forks}
								repoSize={repo.size}
								repoUrl={repo.html_url}
							/>
						)
					})}
				</div>
			</section>
		</div>
	)
}

export default User

export async function getServerSideProps({ params }) {
	const userRes = await fetch(`https://api.github.com/users/${params.user}`)
	const userData = await userRes.json()

	const reposRes = await fetch(`https://api.github.com/users/${params.user}/repos?per_page=12`)
	const userRepos = await reposRes.json()

	return {
		props: {
			userData,
			userRepos,
		},
	}
}

const gsapAnimation = () => {
	gsap.from('.animateRepo', {
		opacity: 0,
		y: 30,
		duration: 1,
		ease: 'expo.Out',
		stagger: 0.2,
	})
}
