import styles from '../styles/UserNotFound.module.css'
import { FaRegSadTear } from 'react-icons/fa'

const UserNotFound = () => {
	return (
		<div className={styles.notfound}>
			<FaRegSadTear />
			<h3>Sorry, I can't find the user you're looking for.</h3>
		</div>
	)
}

export default UserNotFound
