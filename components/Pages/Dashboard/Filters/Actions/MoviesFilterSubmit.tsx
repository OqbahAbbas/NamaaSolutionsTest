import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { Button } from '@admixltd/admix-component-library'
import { getDataByFieldsList } from '@forms/index'
import { SelectActorsCountOption, SelectYearOption } from '@api/Models/Movie/types'
import { MoviesAtom } from '@atoms/Dashboard'
import dataPrefix from '../dataPrefix'
import sortMovies from '../../MovieSort/sort'

const MoviesFilterSubmit = () => {
	const { filter } = useRecoilValue(LabelsAtom).pages.dashboard.filters.actions
	const movies = useRecoilValue(MoviesAtom)

	const handleSubmit = () => {
		const formData = getDataByFieldsList({ dataPrefix })
		let filteredMovies = [...movies]
		const searchTitle = formData['title' as keyof typeof formData] as string
		const searchYear = formData['year' as keyof typeof formData] as unknown as SelectYearOption
		const searchActorsCount = formData[
			'actorsCount' as keyof typeof formData
		] as unknown as SelectActorsCountOption
		if (searchTitle) {
			filteredMovies = filteredMovies.filter(movie =>
				movie.title.toLowerCase().includes(searchTitle.toLowerCase())
			)
		}
		if (searchYear) {
			filteredMovies = filteredMovies.filter(movie => movie.year === searchYear.val)
		}
		if (searchActorsCount) {
			filteredMovies = filteredMovies.filter(movie => {
				if (searchActorsCount.val.length > 1)
					return (
						movie.actors.length >= searchActorsCount.val[0] &&
						movie.actors.length <= searchActorsCount.val[1]
					)
				return movie.actors.length >= searchActorsCount.val[0]
			})
		}
		sortMovies(filteredMovies)
	}

	return (
		<Button round type="submit" size="medium" variant="contained" onClick={handleSubmit}>
			{filter}
		</Button>
	)
}

export default MoviesFilterSubmit
