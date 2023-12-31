import { Labels } from '@labels'
import { useTheme } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { Fields } from '@forms/index'
import dataPrefix from '@components/Pages/Edit/dataPrefix'
import styled from '@emotion/styled'
import { DateObject } from 'react-multi-date-picker'
import { EditActorColumnDefinition } from './types'

const ActorDateField = ({ id }: { id: string }) => {
	const { joinDate } = useRecoilValue(LabelsAtom).pages.edit.table.columns
	const { colors } = useTheme()

	const { fields } = Fields(
		[
			{
				sections: [
					{
						type: 'DatePicker',
						name: `${id}-joinDate`,
						validation: ['required'],
						props: {
							placeholder: joinDate,
							maxDate: new DateObject(),
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
	margin: 10px;
	position: absolute;
`

export default (labels: Labels[keyof Labels]['pages']['edit']['table']['columns']) =>
	({
		field: 'joinDate',
		headerName: labels.joinDate,
		sortable: false,
		renderCell: ({ row: { id } }) => <ActorDateField id={id} />,
	} as EditActorColumnDefinition)
