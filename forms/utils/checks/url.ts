import { ChecksType } from '@forms/utils/checks/types'

const url: ChecksType['url'] = (value, options = {}) => {
	// eslint-disable-next-line
	const regExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
	const { message = 'Please use a valid url' } = options
	if (!value || regExp.test(`${value}`)) return
	return typeof message === 'string' ? message : message()
}

export default url
