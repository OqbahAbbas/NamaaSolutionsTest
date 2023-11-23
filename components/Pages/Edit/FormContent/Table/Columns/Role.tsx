import { Labels } from '@labels'
import { useTheme } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { Fields } from '@forms/index'
import dataPrefix from '@components/Pages/Edit/dataPrefix'
import styled from '@emotion/styled'
import { ActorRoles } from '@api/Models/Movie/types'
import enumKeys from '@utils/basic/enumKeys'
import { EditActorColumnDefinition } from './types'

const ActorRoleField = ({ id }: { id: string }) => {
	const { role } = useRecoilValue(LabelsAtom).pages.edit.table.columns
	const { colors } = useTheme()

	const rolesOptions = enumKeys(ActorRoles).map(key => ({
		title: ActorRoles[key],
		val: key,
	}))

	const { fields } = Fields(
		[
			{
				sections: [
					{
						type: 'AutocompleteSingleAsync',
						name: `${id}-role`,
						validation: ['required'],
						props: {
							placeholder: role,
							options: rolesOptions,
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
					legendBackground: colors.gray100,
					style: { width: '150px' },
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
		field: 'role',
		headerName: labels.role,
		sortable: false,
		renderCell: ({ row: { id } }) => <ActorRoleField id={id} />,
	} as EditActorColumnDefinition)
