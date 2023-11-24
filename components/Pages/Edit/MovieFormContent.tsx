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
						validation: ['required', { name: 'maxLength', options: { value: 50 } }],
						props: {
							label: labels.fields.title,
							placeholder: labels.fields.title,
							requiredLabel: true,
						},
					},
					{
						type: 'NumericInput',
						name: 'year',
						validation: [
							'required',
							{ name: 'maxValue', options: { value: 2023 } },
							{ name: 'minValue', options: { value: 1900 } },
						],
						props: {
							label: labels.fields.year,
							placeholder: labels.fields.year,
							requiredLabel: true,
							thousandSeparator: '',
							className: 'yearField',
							max: 2023,
						},
					},
					{
						type: 'TextArea',
						name: 'description',
						validation: [{ name: 'maxLength', options: { value: 200 } }],
						props: {
							label: labels.fields.description,
							placeholder: labels.fields.description,
							minRows: 3,
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
	grid-template-columns: repeat(2, 1fr);
	gap: 16px;
	margin: 16px 0;

	.yearField {
		input {
			direction: ltr !important;
		}
	}

	${({ theme }) => theme.adaptive.md} {
		grid-auto-flow: row;
		grid-template-columns: 1fr;
	}
`

export default UpdateMovieFormContent
