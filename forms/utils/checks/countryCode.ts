import { ChecksType } from '@forms/utils/checks/types'

const countryCode: ChecksType['countryCode'] = (value, options = {}) => {
	const { message = 'Please add a valid country code' } = options
	const regExp = /^[+][0-9]{1,4}(?:,[0-9]{1,4})?$/
	if (regExp.test(`${value}`)) return
	return typeof message === 'string' ? message : message()
}

export default countryCode
