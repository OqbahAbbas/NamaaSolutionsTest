import { setRecoil } from '@admixltd/admix-component-library/RecoilNexus'
import { getDataByFieldsList } from '@forms/index'
import getLabels from '@helpers/getLabels'
import formValidation from '@utils/forms/formValidation'
import { MovieEditFormLoadingAtom, MoviesCookieName } from '@atoms/Dashboard'
import { getCookie, setCookie } from 'cookies-next'
import { createFormDataToMovie, editFormDataToMovie } from '@api/Models/Movie/formDataConverter'
import { Movie } from '@api/Models/Movie/types'
import { Snackbar } from '@admixltd/admix-component-library/Snackbar'
import { getRouter } from '@helpers/RouterNexus'
import pages from '@constants/pages'
import { SomeObject } from '@admixltd/admix-component-library'
import { IFieldValue } from '@forms/generate/types/IFieldValue'
import dataPrefix from './dataPrefix'

const handleSubmit = async (isCreate: boolean) => {
	/**
	 * Get data from state
	 */
	const formData = getDataByFieldsList({ dataPrefix })

	/**
	 * Convert data to movie object
	 */
	const movieData = isCreate
		? createFormDataToMovie({ formData })
		: editFormDataToMovie({ formData })

	if (!movieData.actors?.length) {
		Snackbar.error(getLabels().pages.edit.noActorsNoMovie)
		return
	}

	/**
	 * validate form
	 */
	const formValid = await formValidation({
		data: movieData as SomeObject<IFieldValue>,
		dataPrefix,
	})
	if (!formValid) return

	const { errors, successes } = getLabels().pages.edit

	setRecoil(MovieEditFormLoadingAtom, true)

	const moviesCookie = getCookie(MoviesCookieName)
	const moviesArray = moviesCookie ? (JSON.parse(moviesCookie as string) as Movie[]) : []

	if (isCreate) {
		const existingMovie = moviesArray.find(movie => movie.title === movieData.title)
		/**
		 * Handle error
		 */
		if (existingMovie) {
			Snackbar.error(errors.createFailure)
			setRecoil(MovieEditFormLoadingAtom, false)
		} else {
			/**
			 * Handle Success
			 */
			moviesArray.push(movieData as Movie)
			setCookie(MoviesCookieName, JSON.stringify(moviesArray))
			Snackbar.success(successes.createSuccess)
			getRouter().push(pages.dashboard.url)
		}
	} else {
		const updatedMoviesArray = moviesArray.map(movie => {
			if (movie.id === movieData.id) return movieData
			return movie
		})
		setCookie(MoviesCookieName, JSON.stringify(updatedMoviesArray))
		Snackbar.success(successes.updateSuccess)
		getRouter().push(pages.dashboard.url)
	}
}

export default handleSubmit
