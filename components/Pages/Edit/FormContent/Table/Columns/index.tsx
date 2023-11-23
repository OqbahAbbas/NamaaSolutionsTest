import { Labels } from '@labels'
import { ColumnDefinition } from '@admixltd/admix-component-library/Table'
import { GridValueFormatterParams } from '@mui/x-data-grid'
import getLabels from '@helpers/getLabels'
import columnAutoWidth from '@utils/table/columnAutoWidth'
import { EditActorColumnDefinition } from './types'
import Name from './Name'
import Age from './Age'
import Role from './Role'
import JoinDate from './JoinDate'
import RemoveActor from './RemoveActor'

const valueFormatter = ({ value }: GridValueFormatterParams) => {
	if (!value) return getLabels().pages.dashboard.table.errors.noDataSpecified
	return value
}

const Columns: (
	labels: Labels[keyof Labels]['pages']['edit']['table']['columns']
) => Array<ColumnDefinition> = labels =>
	(
		[
			Name(labels),
			Age(labels),
			Role(labels),
			JoinDate(labels),
			RemoveActor(),
		] as EditActorColumnDefinition[]
	).map((column: ColumnDefinition) => ({
		...columnAutoWidth(column),
		valueFormatter: column.valueFormatter ?? valueFormatter,
	}))

export default Columns
