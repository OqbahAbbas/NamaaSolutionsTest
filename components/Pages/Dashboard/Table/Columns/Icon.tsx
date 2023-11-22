import { Labels } from '@labels'
import { useTheme } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { Fields } from '@forms/index'
import dataPrefix from '@components/Pages/Edit/dataPrefix'
import { MovieColumnDefinition } from './types'

const UpdateMovieFormContent = () => {
	const labels = useRecoilValue(LabelsAtom).pages.edit
	const { colors } = useTheme()

	const { fields } = Fields(
		[
			{
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
				],
			},
		],
		{
			dataPrefix,
			extraProps: {
				input: {
					legendBackground: colors.gray100,
				},
			},
		}
	)
	return <div>{fields}</div>
}

export default (labels: Labels[keyof Labels]['pages']['dashboard']['table']['columns']) =>
	({
		field: 'iconUrl',
		headerName: labels.title,
		sortable: false,
		width: 100,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		renderCell: () => <UpdateMovieFormContent />,
	} as unknown as MovieColumnDefinition)
