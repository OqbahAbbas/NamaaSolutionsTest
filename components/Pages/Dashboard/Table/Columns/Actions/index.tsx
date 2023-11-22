import { Labels } from '@labels'

import { ColumnDefinition, TableActionMenu } from '@admixltd/admix-component-library/Table'
import StyledMenu from '@components/Layouts/Main/StyledMenu/StyledMenu'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

export default (labels: Labels[keyof Labels]['pages']['dashboard']['table']['columns']) =>
	({
		align: 'right',
		type: 'actions',
		field: 'action',
		renderCell: ({ row: { id } }) => (
			<TableActionMenu id={id}>
				{({ close: closeMenu }) => (
					<StyledMenu>
						<div className="titleContainer">{labels.actions.menuTitle}</div>
						<div className="menuGroup">
							<EditButton id={id} closeMenu={closeMenu}>
								{labels.actions.edit}
							</EditButton>

							<DeleteButton id={id} closeMenu={closeMenu}>
								{labels.actions.delete.label}
							</DeleteButton>
						</div>
					</StyledMenu>
				)}
			</TableActionMenu>
		),
	} as ColumnDefinition)
