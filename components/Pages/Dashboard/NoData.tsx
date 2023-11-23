import styled from '@emotion/styled'
import LabelsAtom from '@atoms/Labels'
import { useRecoilValue } from 'recoil'
import { MoviesAtom, MoviesCookieName } from '@atoms/Dashboard'
import { setCookie } from 'cookies-next'
import { setRecoil } from '@admixltd/admix-component-library/RecoilNexus'
import { Button } from '@admixltd/admix-component-library'
import fakeData from './fakeData'

const NoData = () => {
	const { text, buttonText } = useRecoilValue(LabelsAtom).pages.dashboard.noData

	const addData = () => {
		setCookie(MoviesCookieName, JSON.stringify(fakeData))
		setRecoil(MoviesAtom, fakeData)
	}

	return (
		<Container>
			<p className="text">{text}</p>
			<Button color="primary" variant="contained" onClick={addData}>
				{buttonText}
			</Button>
		</Container>
	)
}

export const Container = styled.div`
	display: grid;
	grid-auto-flow: column;
	width: 100%;
	align-text: center;
	justify-content: center;
	align-items: center;
	gap: 4px;

	p {
		color: ${({ theme }) => theme.colors.secondary};
	}
`

export default NoData
