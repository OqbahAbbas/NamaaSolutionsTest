import { Labels } from '@labels'
import { ColumnDefinition } from '@admixltd/admix-component-library/Table'
import { GridValueFormatterParams } from '@mui/x-data-grid'
import getLabels from '@helpers/getLabels'
import columnAutoWidth from '@utils/table/columnAutoWidth'
import { ActorColumnDefinition } from './types'

const valueFormatter = ({ value }: GridValueFormatterParams) => {
	if (!value) return getLabels().pages.dashboard.table.errors.noDataSpecified
	return value
}

const Columns: (
	labels: Labels[keyof Labels]['pages']['viewDetails']['table']['columns']
) => Array<ColumnDefinition> = labels =>
	(
		[
			{ field: 'id', headerName: labels.id, sortable: false },
			{ field: 'name', headerName: labels.name, sortable: false },
			{ field: 'age', headerName: labels.age, sortable: false },
			{ field: 'joinDate', headerName: labels.joinDate, sortable: false },
			{ field: 'actorRole', headerName: labels.role, sortable: false },
		] as ActorColumnDefinition[]
	).map((column: ColumnDefinition) => ({
		...columnAutoWidth(column),
		valueFormatter: column.valueFormatter ?? valueFormatter,
	}))

export default Columns
