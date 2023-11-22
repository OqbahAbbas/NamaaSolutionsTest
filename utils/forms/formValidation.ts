import { handleBlur, SomeObject } from '@admixltd/admix-component-library'
import { getRecoil } from '@admixltd/admix-component-library/RecoilNexus'
import { IFieldValue } from '@forms/generate/types/IFieldValue'
import { FormFieldErrorsDataUpdater } from '@forms/index'
import formFieldsValidation from './formFieldsValidation'

interface IFormValidation {
	data: SomeObject<IFieldValue>
	dataPrefix: string
}

const formValidation = async ({ data, dataPrefix }: IFormValidation) => {
	handleBlur()
	const fieldsList: string[] = []
	Object.keys(data).forEach(key => fieldsList.push(key))

	return (async () => {
		/**
		 * Update FormFieldErrorsDataUpdater with form validation errors
		 */
		await formFieldsValidation({
			fieldsList,
			dataPrefix,
		})
		/**
		 * Check if sub-form has errors
		 */
		const errors = getRecoil(FormFieldErrorsDataUpdater)
		let valid = true
		Object.keys(data).forEach(key => {
			if (errors[`${dataPrefix}${key}`]) valid = false
		})
		return valid
	})()
}

export default formValidation
