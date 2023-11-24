import { gridClasses, GridRowsProp } from '@mui/x-data-grid'

import { useRecoilState, useRecoilValue } from 'recoil'
import styled from '@emotion/styled'
import LabelsAtom from '@atoms/Labels'
import { NoRowsResults, Table as ACLTable } from '@admixltd/admix-component-library/Table'
import NoSearchResults from '@components/Helpers/Table/NoSearchResults'
import { EditActorsTableDataAtom, EditSelectedMovieAtom } from '@atoms/Dashboard'
import { useEffect } from 'react'
import { ActorRoles } from '@api/Models/Movie/types'
import columns from './Columns'

const Table = () => {
	const selectedMovie = useRecoilValue(EditSelectedMovieAtom)
	const [tableData, setTableData] = useRecoilState(EditActorsTableDataAtom)

	const columnLabels = useRecoilValue(LabelsAtom).pages.edit.table.columns

	const { noResults } = useRecoilValue(LabelsAtom).table

	useEffect(() => {
		setTableData(selectedMovie.actors)
	}, [selectedMovie])

	/**
	 * Rows data mapping
	 */
	const rows: GridRowsProp = tableData
		? tableData?.map(({ id, name, role, ...other }) => ({
				id,
				[`${id}-name`]: name,
				role: {
					title: ActorRoles[role as unknown as keyof typeof ActorRoles],
					val: role,
				},
				...other,
		  }))
		: []

	return (
		<Container>
			<StyledTable
				{...{
					rows,
					rowCount: rows.length,
					columns: columns(columnLabels),
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
