import React from 'react'
import { useGridRootProps } from '@mui/x-data-grid'
import NoSearchResults from './NoSearchResults'

const NoRowsResults = () => {
	const {
		localeText: { noRowsLabel },
	} = useGridRootProps()
	return <NoSearchResults label={noRowsLabel} />
}

export default NoRowsResults
