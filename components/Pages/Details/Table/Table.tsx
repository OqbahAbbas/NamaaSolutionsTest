import { gridClasses, GridRowsProp } from '@mui/x-data-grid'

import { useRecoilValue } from 'recoil'
import styled from '@emotion/styled'
import LabelsAtom from '@atoms/Labels'
import { SomeObject } from '@admixltd/admix-component-library'
import { NoRowsResults, Table as ACLTable } from '@admixltd/admix-component-library/Table'
import NoSearchResults from '@components/Helpers/Table/NoSearchResults'
import { ColumnVisibilityAtom, SelectedMovieAtom } from '@atoms/ViewDetails'
import { useEffect, useState } from 'react'
import { Actor, ActorRoles } from '@api/Models/Movie/types'
import columns from './Columns'

const Table = () => {
	const selectedMovie = useRecoilValue(SelectedMovieAtom)
	const [tableData, setTableData] = useState<Actor[]>([])

	useEffect(() => {
		setTableData(selectedMovie?.actors ?? [])
	}, [selectedMovie])

	const columnLabels = useRecoilValue(LabelsAtom).pages.viewDetails.table.columns

	const hiddenColumns = useRecoilValue(ColumnVisibilityAtom)
	const columnVisibilityModel: SomeObject<boolean> = {}
	hiddenColumns.forEach(column => {
		columnVisibilityModel[column] = false
	})

	const { noResults } = useRecoilValue(LabelsAtom).table

	/**
	 * Rows data mapping
	 */
	const rows: GridRowsProp = tableData?.map(({ role, ...other }) => ({
		actorRole: ActorRoles[role as unknown as keyof typeof ActorRoles],
		...other,
	}))

	return (
		<Container>
			<StyledTable
				{...{
					rows,
					columns: columns(columnLabels),
					columnVisibilityModel,
					rowCount: tableData.length,
					onCellEditCommit: () => {},
					components: {
						NoRowsOverlay: () => <NoRowsResults />,
						NoResultsOverlay: () => <NoSearchResults {...{ label: noResults }} />,
					},
					props: {
						disableColumnReorder: true,
					},
				}}
				getRowId={({ id }) => id}
				hideFooter
				autoHeight
				getRowHeight={() => 'auto'}
			/>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-grow: 1;
`

const StyledTable = styled(ACLTable)`
	&& {
		.${gridClasses.columnHeaders} {
			border-top-right-radius: 4px;
			border-top-left-radius: 4px;
		}
	}
`
export default Table
