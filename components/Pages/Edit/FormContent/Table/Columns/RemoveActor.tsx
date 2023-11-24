import { ReactComponent as Close } from '@svg/pages/dashboard/close.svg'
import { Button, SomeObject } from '@admixltd/admix-component-library'
import { FormFieldDataUpdater, getDataByFieldsList } from '@forms/index'
import dataPrefix from '@components/Pages/Edit/dataPrefix'
import { IFieldValue } from '@forms/generate/types/IFieldValue'
import { getRecoil, setRecoil } from '@admixltd/admix-component-library/RecoilNexus'
import { EditSelectedMovieAtom } from '@atoms/Dashboard'
import { debounce } from '@mui/material'
import { EditActorColumnDefinition } from './types'

const removeActor = (id: string) => {
	const movieFormData = getDataByFieldsList({ dataPrefix })

	const FormData: SomeObject<IFieldValue> = {}
	Object.keys(movieFormData).forEach(key => {
		if (!key.startsWith(id)) {
			FormData[`${dataPrefix}${key}`] = movieFormData[key]
		}
	})

	setRecoil(FormFieldDataUpdater, FormData)

	const selectedMovie = getRecoil(EditSelectedMovieAtom)
	const actors = selectedMovie.actors.filter(actor => actor.id !== id)
	setRecoil(EditSelectedMovieAtom, {
		...selectedMovie,
		actors,
	})
}

const debouncedRemoveActor = debounce(removeActor, 500)

export default () =>
	({
		field: 'remove',
		headerName: '',
		sortable: false,
		renderCell: ({ row: { id } }) => (
			<Button icon={<Close />} color="gray500" onClick={() => debouncedRemoveActor(id)} />
		),
	} as EditActorColumnDefinition)
