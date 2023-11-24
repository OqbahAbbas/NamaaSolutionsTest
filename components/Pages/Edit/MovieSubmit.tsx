import { useRecoilState, useRecoilValue } from 'recoil'
import { Button, useFirstRender } from '@admixltd/admix-component-library'
import { FormFieldDataUpdater } from '@forms'
import { useEffect, useMemo } from 'react'
import LabelsAtom from '@atoms/Labels'
import { MovieEditFormLoadingAtom, MovieEditFormUpdatedAtom } from '@atoms/Dashboard'

const AttributeSubmit = () => {
	const firstRender = useFirstRender()
	const [formUpdated, setFormUpdated] = useRecoilState(MovieEditFormUpdatedAtom)
	const { save } = useRecoilValue(LabelsAtom).pages.edit.actions
	const loading = useRecoilValue(MovieEditFormLoadingAtom)

	const formData = useRecoilValue(FormFieldDataUpdater)

	useEffect(() => {
		if (firstRender) return
		if (formUpdated) return
		setFormUpdated(true)
	}, [JSON.stringify(formData)])

	return useMemo(
		() => (
			<Button round type="submit" size="large" variant="contained" loading={loading}>
				{save}
			</Button>
		),
		[loading, save]
	)
}

export default AttributeSubmit
