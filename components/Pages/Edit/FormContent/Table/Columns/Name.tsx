import { Labels } from '@labels'
import { useTheme } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { Fields } from '@forms/index'
import dataPrefix from '@components/Pages/Edit/dataPrefix'
import styled from '@emotion/styled'
import { EditActorColumnDefinition } from './types'

const ActorNameField = ({ id }: { id: string }) => {
	const { name } = useRecoilValue(LabelsAtom).pages.edit.table.columns
	const { colors } = useTheme()

	const { fields } = Fields(
		[
			{
				sections: [
					{
						type: 'RegularInput',
						name: `${id}-name`,
						validation: ['required'],
						props: {
							placeholder: name,
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
		field: 'name',
		headerName: labels.name,
		sortable: false,
		renderCell: ({ row: { id } }) => <ActorNameField id={id} />,
	} as EditActorColumnDefinition)
