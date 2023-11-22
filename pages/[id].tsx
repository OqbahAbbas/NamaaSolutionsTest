import Meta from '@components/Layouts/Meta'
import styled from '@emotion/styled'
import BaseContainer from '@components/Layouts/Main/Container'
import MainLayout from '@components/Layouts/Main'
import initialPropsWrapper from '@helpers/initialPropsWrapper'
import { NextPageWithProps } from '@interfaces/NextPage'
import { Movie } from '@api/Models/Movie/types'
import MovieFormActions from '@components/Pages/Dashboard/Edit/FormContent/MovieFormActions'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import handleSubmit from '@components/Pages/Dashboard/Edit/editController'
import { FormFieldDataUpdater, FormFieldErrorsDataUpdater } from '@forms/index'
import {
	MovieEditFormLoadingAtom,
	MovieEditFormUpdatedAtom,
	MoviesCookieName,
} from '@atoms/Dashboard'
import { SomeObject } from '@admixltd/admix-component-library'
import { IFieldValue } from '@forms/generate/types/IFieldValue'
import { movieToFormData } from '@api/Models/Movie/formDataConverter'
import dataPrefix from '@components/Pages/Dashboard/Edit/dataPrefix'
import MovieFormContent from '@components/Pages/Dashboard/Edit/MovieFormContent'
import { getCookie } from 'cookies-next'
import pages from '@constants/pages'

const Page: NextPageWithProps<{
	movie: Movie
	mode?: 'create' | 'edit'
}> = ({ movie, mode }) => {
	const { createHeader, editHeader } = useRecoilValue(LabelsAtom).pages.edit
	const isCreate = mode === 'create'

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
		padding: 32px 0;
	}
}`

const Form = styled.form`
	display: grid;
	grid-auto-flow: row;
	grid-template-rows: auto;
	width: 45%;
	min-width: 500px;
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

			if (!movie)
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
}

export default Page
