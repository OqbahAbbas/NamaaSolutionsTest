import { ColumnDefinition } from '@admixltd/admix-component-library/Table'
import { Movie } from '@api/Models/Movie/types'

export interface MovieColumnDefinition extends Omit<ColumnDefinition, 'field'> {
	field: keyof Movie
}
