import styled from '@emotion/styled'
import MoviesFilterCancel from './MoviesFilterCancel'
import MoviesFilterSubmit from './MoviesFilterSubmit'

const MoviesFilterFormActions = () => (
	<Container>
		<MoviesFilterSubmit />
		<MoviesFilterCancel />
	</Container>
)

const Container = styled.div`
	display: flex;
	gap: 16px;
	justify-content: flex-end;
	margin-bottom: 24px;
`

export default MoviesFilterFormActions
