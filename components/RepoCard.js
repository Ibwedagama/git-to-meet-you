import styles from '../styles/RepoCard.module.css'
import { FiBook } from 'react-icons/fi'
import { FiStar } from 'react-icons/fi'
import { BiGitRepoForked } from 'react-icons/bi'

const RepoCard = ({ repoTitle, repoDesc, repoLang, repoStars, repoFork, repoSize, repoUrl }) => {
	return (
		<div className={`${styles.repoCard} animateRepo`}>
			<div className={styles.header}>
				<FiBook></FiBook>
				<a href={repoUrl} className={styles.repoTitle} target='_blank' rel='noopener'>
					{repoTitle}
				</a>
			</div>
			<div className={styles.body}>
				<p>{repoDesc}</p>
			</div>
			<div className={styles.footer}>
				<div className={styles.left}>
					<p>
						<span className={styles.circle} />
						{repoLang}
					</p>
					<p>
						<FiStar />
						{repoStars}
					</p>
					<p>
						<BiGitRepoForked />
						{repoFork}
					</p>
				</div>
				<div className={styles.right}>
					<p>{repoSize} KB</p>
				</div>
			</div>
		</div>
	)
}

export default RepoCard
