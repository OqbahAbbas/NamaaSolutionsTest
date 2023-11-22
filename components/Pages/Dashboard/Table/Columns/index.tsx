import { Labels } from '@labels'
import { ColumnDefinition } from '@admixltd/admix-component-library/Table'
import { GridValueFormatterParams } from '@mui/x-data-grid'
import getLabels from '@helpers/getLabels'
import columnAutoWidth from '@utils/table/columnAutoWidth'
import Actions from './Actions'
import { MovieColumnDefinition } from './types'

const valueFormatter = ({ value }: GridValueFormatterParams) => {
	if (!value) return getLabels().pages.dashboard.table.errors.noDataSpecified
	return value
}

const Columns: (
	labels: Labels[keyof Labels]['pages']['dashboard']['table']['columns']
) => Array<ColumnDefinition> = labels =>
	(
		[
			{ field: 'id', headerName: labels.id, sortable: false },
			{ field: 'title', headerName: labels.title, sortable: false },
			{ field: 'year', headerName: labels.year, sortable: false },
			{ field: 'actorsCount', headerName: labels.actorsCount, sortable: false },
			Actions(labels),
		] as MovieColumnDefinition[]
	).map((column: ColumnDefinition) => ({
		...columnAutoWidth(column),
		valueFormatter: column.valueFormatter ?? valueFormatter,
	}))

export default Columns
