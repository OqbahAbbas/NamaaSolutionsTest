import Meta from '@components/Layouts/Meta'
import styled from '@emotion/styled'
import BaseContainer from '@components/Layouts/Main/Container'
import MainLayout from '@components/Layouts/Main'
import initialPropsWrapper from '@helpers/initialPropsWrapper'
import { NextPageWithProps } from '@interfaces/NextPage'
import { Movie } from '@api/Models/Movie/types'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { MoviesCookieName } from '@atoms/Dashboard'
import { getCookie } from 'cookies-next'
import pages from '@constants/pages'
import { SelectedMovieAtom } from '@atoms/ViewDetails'
import { flexGap } from '@admixltd/admix-component-library'
import { useRouter } from 'next/router'
import Table from '@components/Pages/Details/Table/Table'
import ColumnSelector from '@components/Pages/Details/Table/ColumnSelector'
import Details from '@components/Pages/Details'

const Page: NextPageWithProps<{
	movie: Movie
}> = ({ movie }) => {
	const { title, actors } = useRecoilValue(LabelsAtom).pages.viewDetails
	const router = useRouter()
	const { locale } = router ?? {}

	return (
		<>
			<Meta title={`${title} | ${movie.title}`} />
			<Container>
				<Details movie={movie} />
				<h2>{actors}</h2>
				<TableContainer locale={locale ?? 'en'}>
					<TableActions>
						<div />
						<div>
							<div />
							<ColumnSelector />
						</div>
					</TableActions>
					<Table />
				</TableContainer>
			</Container>
		</>
	)
}

const Container = styled(BaseContainer)`
	grid-auto-flow: row;
	padding: 32px 100px;
	background-color: #e8efff;
	min-height: 100vh;
	gap: 32px;

	h2 {
		color: ${({ theme }) => theme.colors.primary};
	}

	${({ theme }) => theme.adaptive.md} {
		padding: 32px 24px;
	}
}`

const TableContainer = styled.div<{
	locale: string
}>`
	border-radius: 8px;
	padding: 0 24px;
	background-color: ${({ theme }) => theme.colors.white};
	margin: 8px 0 24px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow-x: scroll;
	box-shadow: 10px 10px 10px #c6cddd;
	box-shadow: inset 0px -1px 0px ${({ theme }) => theme.colors.gray200};
	.MuiDataGrid-root {
		width: 100%;
		direction: ${({ locale }) => (locale === 'ar' ? 'rtl' : 'ltr')};
	}
	.MuiDataGrid-columnHeadersInner {
		direction: ltr;
	}
	.MuiDataGrid-virtualScrollerContent {
		direction: ltr;
	}
`

const TableActions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 66px;
	margin-right: -10px;
	margin-left: -10px;
	padding-left: 10px;

	${flexGap(8)};

	> div {
		${flexGap(16)};
	}
`

Page.getInitialProps = context =>
	initialPropsWrapper(
		async ({ req, query }) => {
			const { id } = query ?? {}

			if (!id)
				return {
					redirect: pages.dashboard.url,
				}

			const moviesCookie = getCookie(MoviesCookieName, { req })
			const movies = moviesCookie ? JSON.parse(moviesCookie as string) : []
			const movie = movies.find((item: Movie) => item.id === id)

			if (!movie)
				return {
					redirect: pages.dashboard.url,
				}

			return { movie }
		},
		Page,
		context
	)

Page.getLayout = page => <MainLayout>{page}</MainLayout>

Page.recoilSetter = ({ set }, { movie }) => {
	set(SelectedMovieAtom, movie)
}

export default Page
