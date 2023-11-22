import global from './global'
import dashboard from './pages/dashboard'
import header from './layout/header'
import footer from './layout/footer'
import errors from './errors'
import edit from './pages/edit'
import table from './table'

const labels = {
	global,
	pages: {
		dashboard,
		edit,
	},
	layout: {
		header,
		footer,
	},
	errors,
	table,
}

export default labels
