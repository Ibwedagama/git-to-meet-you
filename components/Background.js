import styles from '../styles/Background.module.css'

const Background = () => {
	return (
		<div className={styles.background}>
			<iframe
				src='https://my.spline.design/githubicons-2e10bf887bb39e2068e4f9493ec1d584/'
				frameBorder='0'
				width='100%'
				height='100%'
			></iframe>
			<div className={styles.overlay}></div>
		</div>
	)
}

export default Background
