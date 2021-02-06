import styles from '../styles/Background.module.css'

const Background = ({ ready = false }) => {
	let loadIframe = null

	if (ready) {
		loadIframe = (
			<iframe
				src={`https://my.spline.design/githubicons-2e10bf887bb39e2068e4f9493ec1d584/`}
				frameBorder='0'
				width='100%'
				height='100%'
			></iframe>
		)
	}
	return (
		<div className={styles.background}>
			{loadIframe}
			<div className={styles.overlay}></div>
		</div>
	)
}

export default Background
