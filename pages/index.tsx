import Meta from '@components/Layouts/Meta'
import BaseContainer from '@components/Layouts/Main/Container'
import styled from '@emotion/styled'
import MainLayout from '@components/Layouts/Main'
import initialPropsWrapper from '@helpers/initialPropsWrapper'
import { NextPageWithProps } from '@interfaces/NextPage'
import MovieCard from '@components/Pages/Dashboard/List/MovieCard'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
	ActiveMoviesAtom,
	MoviesAtom,
	MoviesCookieName,
	SortMoviesAtom,
	ViewMoviesAtom,
} from '@atoms/Dashboard'
import Filters from '@components/Pages/Dashboard/Filters'
import { useEffect } from 'react'
import LabelsAtom from '@atoms/Labels'
import MovieSort from '@components/Pages/Dashboard/MovieSort'
import sortMovies from '@components/Pages/Dashboard/MovieSort/sort'
import MovieView from '@components/Pages/Dashboard/view'
import { useRouter } from 'next/router'
import { Button, flexGap } from '@admixltd/admix-component-library'
import ColumnSelector from '@components/Pages/Dashboard/Table/ColumnSelector'
import Table from '@components/Pages/Dashboard/Table/Table'
import { getCookie } from 'cookies-next'
import pages from '@constants/pages'
import NoData from '@components/Pages/Dashboard/NoData'
import { SortingModel, ViewModel } from '@api/Models/Movie/types'

const Page: NextPageWithProps = () => {
	const {
		results,
		addMovie,
		noDataToShow,
		sort: sortLabels,
		view: viewLabels,
	} = useRecoilValue(LabelsAtom).pages.dashboard
	const movies = useRecoilValue(MoviesAtom)
	const [sort, setSort] = useRecoilState(SortMoviesAtom)
	const [view, setView] = useRecoilState(ViewMoviesAtom)
	const activeMovies = useRecoilValue(ActiveMoviesAtom)
	const router = useRouter()
	const { locale } = router ?? {}

	useEffect(() => {
		const viewVal = viewLabels.options.find(option => option.val === view.val)
		setView(viewVal as ViewModel)

		const sortVal = sortLabels.options.find(
			option => option.val.key === sort.val.key && option.val.order === sort.val.order
		)
		setSort(sortVal as SortingModel)
	}, [])

	useEffect(() => {
		sortMovies([...movies])
	}, [movies])

	useEffect(() => {
		sortMovies()
	}, [sort])

	const addNewMovie = () => router.push(pages.createMovie.url)

	return (
		<>
			<Meta />
			<Container>
				<Filters />
				<div className="header">
					<div className="results">
						<h1>{results}</h1>
						<span>{`(${activeMovies.length})`}</span>
					</div>
					<div className="actions">
						<MovieSort />
						<MovieView />
						<Button variant="contained" round onClick={addNewMovie}>
							{addMovie}
						</Button>
					</div>
				</div>
				{movies.length > 0 && activeMovies.length !== 0 && view.val === 'list' && (
					<div className="cardsContainer">
						{activeMovies.map(movie => (
							<MovieCard movie={movie} key={movie.id} />
						))}
					</div>
				)}
				{movies.length > 0 && activeMovies.length === 0 && view.val === 'list' && (
					<div className="noData">{noDataToShow}</div>
				)}
				{movies.length > 0 && view.val === 'table' && (
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
				)}
				{movies.length === 0 && <NoData />}
			</Container>
		</>
	)
}

const Container = styled(BaseContainer)`
	display: grid;
	grid-auto-flow: row;
	grid-template-rows: auto;
	padding: 32px 100px;
	background-color: #e8efff;
	min-height: 100vh;
	gap: 32px;

	${({ theme }) => theme.adaptive.md} {
		padding: 32px 0;
	}

	.header {
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		align-items: center;

		${({ theme }) => theme.adaptive.md} {
			grid-auto-flow: row;
			gap: 24px;
			justify-content: start;
			padding: 0 24px;
		}

		.results {
			display: grid;
			grid-auto-flow: column;
			justify-content: start;
			align-items: center;
			gap: 4px;
			color: ${({ theme }) => theme.colors.primary};
		}

		.actions {
			display: grid;
			grid-auto-flow: column;
			justify-content: start;
			align-items: center;
			gap: 12px;

			${({ theme }) => theme.adaptive.md} {
				grid-auto-flow: row;
			}
		}
	}

	.cardsContainer {
		display: grid;
		grid-auto-flow: dense;
		gap: 16px;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

		${({ theme }) => theme.adaptive.xxs} {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}

		${({ theme }) => theme.adaptive.xs} {
			margin: auto;
		}

		${({ theme }) => theme.adaptive.md} {
			padding: 0 24px;
		}
	}

	.noData {
		display: grid;
		width: 100%;
		align-text: center;
		justify-content: center;
		gap: 8px;
		color: ${({ theme }) => theme.colors.secondary};
	}
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

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
		async ({ req }) => {
			const moviesCookie = getCookie(MoviesCookieName, { req }) as string
			const movies = moviesCookie ? JSON.parse(moviesCookie) : []
			return {
				movies: movies ?? [],
			}
		},
		Page,
		context
	)

Page.getLayout = page => <MainLayout>{page}</MainLayout>

Page.recoilSetter = ({ set }, { movies }) => {
	set(MoviesAtom, movies)
}

export default Page
