import styles from '../styles/SearchBar.module.css'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useState } from 'react'

function SearchBar({ searchValue }) {
	const [newsearch, setNewSearch] = useState('')
	const router = useRouter()

	const handleSearchSubmit = (e) => {
		e.preventDefault()
		router.push({
			pathname: `/users/${newsearch}`,
		})
	}

	return (
		<>
			<form className={styles.searchBar} onSubmit={(e) => handleSearchSubmit(e)}>
				<input
					type='text'
					placeholder='Search user here...'
					className={styles.input}
					value={newsearch}
					onChange={(e) => setNewSearch(e.target.value)}
				/>
				<button className={styles.searchButton} type='submit'>
					<span>
						<FiSearch />
					</span>
					<span className={styles.label}>Search</span>
				</button>
			</form>
		</>
	)
}

export default SearchBar
