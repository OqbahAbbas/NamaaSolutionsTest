import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { Button } from '@admixltd/admix-component-library'
import { useMemo } from 'react'
import { MoviesAtom, MoviesFiltersAtom } from '@atoms/Dashboard'
import { resetRecoil } from '@admixltd/admix-component-library/RecoilNexus'
import { FormFieldDataUpdater, FormFieldErrorsDataUpdater } from '@forms/index'
import sortMovies from '../../MovieSort/sort'

const MoviesFilterCancel = () => {
	const { clear } = useRecoilValue(LabelsAtom).pages.dashboard.filters.actions
	const movies = useRecoilValue(MoviesAtom)

	const handleCancel = () => {
		resetRecoil(MoviesFiltersAtom)
		resetRecoil(FormFieldErrorsDataUpdater)
		resetRecoil(FormFieldDataUpdater)
		sortMovies([...movies])
	}

	return useMemo(
		() => (
			<Button round color="gray500" size="medium" variant="contained" onClick={handleCancel}>
				{clear}
			</Button>
		),
		[clear]
	)
}

export default MoviesFilterCancel
