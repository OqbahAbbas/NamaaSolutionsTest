import styled from '@emotion/styled'
import { ViewModel } from '@api/Models/Movie/types'
import { ButtonBase } from '@mui/material'
import LabelsAtom from '@atoms/Labels'
import { useRecoilState, useRecoilValue } from 'recoil'
import { AutoComplete } from '@admixltd/admix-component-library/AutoComplete'
import { ViewMoviesAtom } from '@atoms/Dashboard'

const MovieView = () => {
	const { label, options } = useRecoilValue(LabelsAtom).pages.dashboard.view
	const [view, setView] = useRecoilState(ViewMoviesAtom)

	return (
		<Container>
			<h2>{label}</h2>
			<AutoComplete
				options={options}
				value={view ?? { title: '' }}
				onChange={(event, newValue) => setView(newValue as ViewModel)}
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

export default MovieView
