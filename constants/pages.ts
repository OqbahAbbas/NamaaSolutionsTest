import url from '@utils/basic/url'

interface PageProtectProps {
	protected?: boolean
	protectedChildren?: boolean
}

export interface Page extends PageProtectProps {
	url: string
}

const pages = {
	dashboard: {
		...({
			url: url('/'),
		} as Page),
	},
	createMovie: {
		...({
			url: url('/create'),
		} as Page),
	},
}

export default pages
