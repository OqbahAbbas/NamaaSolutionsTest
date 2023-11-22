import { useRecoilState, useRecoilValue } from 'recoil'
import { Button, useFirstRender } from '@admixltd/admix-component-library'
import { FormFieldDataUpdater, FormFieldErrorsDataUpdater } from '@forms'
import { useEffect, useMemo } from 'react'
import LabelsAtom from '@atoms/Labels'
import { MovieEditFormLoadingAtom, MovieEditFormUpdatedAtom } from '@atoms/Dashboard'

const AttributeSubmit = () => {
	const firstRender = useFirstRender()
	const [formUpdated, setFormUpdated] = useRecoilState(MovieEditFormUpdatedAtom)
	const errors = useRecoilValue(FormFieldErrorsDataUpdater)
	const { save } = useRecoilValue(LabelsAtom).pages.edit.actions
	const loading = useRecoilValue(MovieEditFormLoadingAtom)

	const formData = useRecoilValue(FormFieldDataUpdater)

	useEffect(() => {
		if (firstRender) return
		if (formUpdated) return
		setFormUpdated(true)
	}, [JSON.stringify(formData)])

	const disabled = !formUpdated || loading || Object.values(errors).length !== 0

	return useMemo(
		() => (
			<Button
				round
				type="submit"
				size="large"
				variant="contained"
				loading={loading}
				disabled={disabled}
			>
				{save}
			</Button>
		),
		[loading, disabled, save]
	)
}

export default AttributeSubmit
