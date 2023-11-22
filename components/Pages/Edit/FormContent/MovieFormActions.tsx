import styled from '@emotion/styled'
import MovieSubmit from '../MovieSubmit'

const MovieFormActions = () => (
	<Container>
		<MovieSubmit />
	</Container>
)

const Container = styled.div`
	display: flex;
	gap: 16px;
	justify-content: flex-end;
`

export default MovieFormActions
