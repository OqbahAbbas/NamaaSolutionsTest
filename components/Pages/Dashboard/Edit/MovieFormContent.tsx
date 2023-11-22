import { Fields } from '@forms'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import dataPrefix from './dataPrefix'

const UpdateMovieFormContent = () => {
	const labels = useRecoilValue(LabelsAtom).pages.edit
	const { colors } = useTheme()

	const { fields } = Fields(
		[
			{
				component: Container,
				sections: [
					{
						type: 'RegularInput',
						name: 'title',
						validation: ['required'],
						props: {
							label: labels.fields.title,
							placeholder: labels.fields.title,
							requiredLabel: true,
						},
					},
					{
						type: 'TextArea',
						name: 'description',
						props: {
							label: labels.fields.description,
							placeholder: labels.fields.description,
							minRows: 3,
						},
					},
					{
						type: 'NumericInput',
						name: 'year',
						validation: ['required'],
						props: {
							label: labels.fields.year,
							placeholder: labels.fields.year,
							requiredLabel: true,
							thousandSeparator: '',
							max: 2023,
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
	gap: 16px;
	margin: 16px 0;
`

export default UpdateMovieFormContent
