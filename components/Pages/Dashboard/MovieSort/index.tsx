import styled from '@emotion/styled'
import { SortingModel } from '@api/Models/Movie/types'
import { ButtonBase } from '@mui/material'
import LabelsAtom from '@atoms/Labels'
import { useRecoilState, useRecoilValue } from 'recoil'
import { AutoComplete } from '@admixltd/admix-component-library/AutoComplete'
import { SortMoviesAtom } from '@atoms/Dashboard'

const MovieSort = () => {
	const { label, options } = useRecoilValue(LabelsAtom).pages.dashboard.sort
	const [sort, setSort] = useRecoilState(SortMoviesAtom)

	return (
		<Container>
			<h2>{label}</h2>
			<AutoComplete
				options={options}
				value={sort ?? { title: '' }}
				onChange={(event, newValue) => setSort(newValue as SortingModel)}
				disableClearable
			/>
		</Container>
	)
}

export const Container = styled(ButtonBase)`
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	justify-content: start;
	gap: 8px;

	h2 {
		color: ${({ theme }) => theme.colors.primary};
	}

	input {
		width: fit-content !important;
	}
`

export default MovieSort
