import Meta from '@components/Layouts/Meta'
import styled from '@emotion/styled'
import BaseContainer from '@components/Layouts/Main/Container'
import MainLayout from '@components/Layouts/Main'
import initialPropsWrapper from '@helpers/initialPropsWrapper'
import { NextPageWithProps } from '@interfaces/NextPage'
import { Actor, Movie } from '@api/Models/Movie/types'
import { useRecoilState, useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { FormFieldDataUpdater, FormFieldErrorsDataUpdater } from '@forms/index'
import {
	EditSelectedMovieAtom,
	MovieEditFormLoadingAtom,
	MovieEditFormUpdatedAtom,
	MoviesCookieName,
} from '@atoms/Dashboard'
import { Button, SomeObject, flexGap } from '@admixltd/admix-component-library'
import { IFieldValue } from '@forms/generate/types/IFieldValue'
import { movieToFormData } from '@api/Models/Movie/formDataConverter'
import { getCookie } from 'cookies-next'
import pages from '@constants/pages'
import MovieFormContent from '@components/Pages/Edit/MovieFormContent'
import handleSubmit from '@components/Pages/Edit/editController'
import MovieFormActions from '@components/Pages/Edit/FormContent/MovieFormActions'
import dataPrefix from '@components/Pages/Edit/dataPrefix'
import { useRouter } from 'next/router'
import Table from '@components/Pages/Edit/FormContent/Table/Table'
import generateId from '@utils/basic/generateId'
import { debounce } from '@mui/material'
import { Snackbar } from '@admixltd/admix-component-library/Snackbar'

const Page: NextPageWithProps<{
	movie: Movie
	mode?: 'create' | 'edit'
}> = ({ movie, mode }) => {
	const { createHeader, editHeader, table, enouphActors } = useRecoilValue(LabelsAtom).pages.edit
	const isCreate = mode === 'create'
	const router = useRouter()
	const { locale } = router ?? {}
	const [selectedMovie, setSelectedMovie] = useRecoilState(EditSelectedMovieAtom)
	const [formData, setFormData] = useRecoilState(FormFieldDataUpdater)

	const addActor = () => {
		if (Array.isArray(selectedMovie.actors) && selectedMovie.actors.length >= 3) {
			Snackbar.error(enouphActors)
			return
		}
		const newActor = {
			id: generateId(),
		} as Actor
		setSelectedMovie({
			...selectedMovie,
			actors:
				Object.keys(selectedMovie).length > 0
					? [...selectedMovie.actors, newActor]
					: [newActor],
		})
		setFormData({
			...formData,
			[`${dataPrefix}${newActor.id}-name`]: undefined,
			[`${dataPrefix}${newActor.id}-age`]: undefined,
			[`${dataPrefix}${newActor.id}-role`]: undefined,
			[`${dataPrefix}${newActor.id}-joinDate`]: undefined,
		})
	}

	const debouncedAddActor = debounce(addActor, 500)

	return (
		<>
			<Meta title={isCreate ? createHeader : `${editHeader} | ${movie.title}`} />
			<Container>
				<h1>{isCreate ? createHeader : `${editHeader} | ${movie.title}`}</h1>
				<Form
					onSubmit={e => {
						e.preventDefault()
						handleSubmit(mode === 'create')
					}}
				>
					<MovieFormContent />
					<TableContainer locale={locale ?? 'en'}>
						<TableActions>
							<div>
								<Button
									color="primary"
									round
									variant="contained"
									onClick={debouncedAddActor}
								>
									{table.addActor}
								</Button>
							</div>
						</TableActions>
						<Table />
					</TableContainer>
					<MovieFormActions />
				</Form>
			</Container>
		</>
	)
}

const Container = styled(BaseContainer)`
	grid-auto-flow: row;
	padding: 32px 100px;
	background-color: #e8efff;
	min-height: 100vh;
	gap: 16px;

	h1 {
		color: ${({ theme }) => theme.colors.primary};
	}

	${({ theme }) => theme.adaptive.md} {
		padding: 32px 24px;
	}
}`

const Form = styled.form`
	display: grid;
	grid-auto-flow: row;
	grid-template-rows: auto;
	width: 100%;
	min-width: 500px;

	${({ theme }) => theme.adaptive.md} {
		width: 100%;
		min-width: 0;
	}
`

const TableContainer = styled.div<{
	locale: string
}>`
	border-radius: 8px;
	padding: 24px;
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
			if (id === 'create') {
				return {
					movie: {} as Movie,
					mode: 'create',
				}
			}

			const moviesCookie = getCookie(MoviesCookieName, { req })
			const movies = moviesCookie ? JSON.parse(moviesCookie as string) : []
			const movie = movies.find((item: Movie) => item.id === id)

			if (id !== 'create' && !movie)
				return {
					redirect: pages.dashboard.url,
				}

			return { movie, mode: 'edit' }
		},
		Page,
		context
	)

Page.getLayout = page => <MainLayout>{page}</MainLayout>

Page.recoilSetter = ({ set, reset }, { movie }) => {
	reset(FormFieldErrorsDataUpdater)
	reset(MovieEditFormUpdatedAtom)
	reset(MovieEditFormLoadingAtom)
	const FormData: SomeObject<IFieldValue> = {}
	const mappedData = movieToFormData(movie)
	Object.keys(mappedData).forEach(key => {
		FormData[`${dataPrefix}${key}`] = mappedData[key as keyof typeof mappedData] as IFieldValue
	})
	set(FormFieldDataUpdater, FormData)
	set(EditSelectedMovieAtom, movie)
}

export default Page
