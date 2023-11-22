import { Fields } from '@forms'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { MoviesAtom } from '@atoms/Dashboard'
import { SomeObject } from '@admixltd/admix-component-library'
import dataPrefix from './dataPrefix'

const AttributeFiltersFormContent = () => {
	const labels = useRecoilValue(LabelsAtom).pages.dashboard.filters
	const { colors } = useTheme()

	const movies = useRecoilValue(MoviesAtom)

	const uniqueYearsMap: SomeObject<{ title: string; val: number }> = {}

	movies.forEach(movie => {
		uniqueYearsMap[movie.year] = {
			title: String(movie.year),
			val: movie.year,
		}
	})

	const releasedYearOptions = Object.values(uniqueYearsMap).sort((a, b) => b.val - a.val)

	const { fields } = Fields(
		[
			{
				component: Container,
				sections: [
					{
						type: 'RegularInput',
						name: 'title',
						props: {
							label: labels.fields.movieTitle,
							placeholder: labels.fields.movieTitle,
						},
					},
					{
						type: 'AutocompleteSingleAsync',
						name: 'year',
						props: {
							label: labels.fields.year,
							options: releasedYearOptions,
							disableClearable: true,
						},
					},
					{
						type: 'AutocompleteSingleAsync',
						name: 'actorsCount',
						props: {
							label: labels.fields.actorsCount.label,
							options: labels.fields.actorsCount.options,
							disableClearable: true,
						},
					},
				],
			},
		],
		{
			dataPrefix,
			extraProps: {
				input: {
					legendBackground: colors.seaBlue,
				},
			},
		}
	)
	return <div>{fields}</div>
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	margin: 16px 0;
	${({ theme }) => theme.adaptive.md} {
		grid-template-columns: 1fr;
	}
`

export default AttributeFiltersFormContent
