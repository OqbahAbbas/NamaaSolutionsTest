import { Labels } from '@labels'
import { useTheme } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { Fields } from '@forms/index'
import dataPrefix from '@components/Pages/Edit/dataPrefix'
import styled from '@emotion/styled'
import { EditActorColumnDefinition } from './types'

const ActorAgeField = ({ id }: { id: string }) => {
	const { age } = useRecoilValue(LabelsAtom).pages.edit.table.columns
	const { colors } = useTheme()

	const { fields } = Fields(
		[
			{
				sections: [
					{
						type: 'RegularInput',
						name: `${id}-age`,
						validation: [
							'required',
							{ name: 'minValue', options: { value: 1 } },
							{ name: 'maxValue', options: { value: 100 } },
						],
						props: {
							placeholder: age,
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
	return <Container>{fields}</Container>
}

const Container = styled.div`
	margin: 10px 0;
`

export default (labels: Labels[keyof Labels]['pages']['edit']['table']['columns']) =>
	({
		field: 'age',
		headerName: labels.age,
		sortable: false,
		renderCell: ({ row: { id } }) => <ActorAgeField id={id} />,
	} as EditActorColumnDefinition)
