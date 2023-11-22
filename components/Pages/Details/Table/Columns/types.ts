import { ColumnDefinition } from '@admixltd/admix-component-library/Table'
import { Actor } from '@api/Models/Movie/types'

export interface ActorColumnDefinition extends Omit<ColumnDefinition, 'field'> {
	field: keyof Actor
}
