import { getRecoil, setRecoil } from '@admixltd/admix-component-library/RecoilNexus'
import { Movie } from '@api/Models/Movie/types'
import { ActiveMoviesAtom, SortMoviesAtom } from '@atoms/Dashboard'

const sortMovies = (movies?: Movie[]) => {
	const sortModel = getRecoil(SortMoviesAtom)
	const activeMovies = getRecoil(ActiveMoviesAtom)
	const toSortArray = movies ?? [...activeMovies]
	const sortedArray = toSortArray.sort((a, b) => {
		let valA: string | number = a.title.toUpperCase()
		let valB: string | number = b.title.toUpperCase()
		if (sortModel?.val.key === 'year') {
			valA = a.year
			valB = b.year
			return sortModel?.val.order === 'descending' ? valB - valA : valA - valB
		}
		if (sortModel?.val.key === 'actors') {
			valA = a.actors.length
			valB = b.actors.length
			return sortModel?.val.order === 'descending' ? valB - valA : valA - valB
		}
		if (valA < valB) {
			return sortModel.val.order === 'ascending' ? -1 : 1
		}
		if (valA > valB) {
			return sortModel.val.order === 'ascending' ? 1 : -1
		}
		return 0
	})
	setRecoil(ActiveMoviesAtom, sortedArray)
}

export default sortMovies
