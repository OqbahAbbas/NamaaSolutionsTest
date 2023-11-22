import { Actor, Movie } from '@api/Models/Movie/types'
import { atom } from 'recoil'

const prefix = 'Details'

export const SelectedMovieAtom = atom<Movie>({
	key: `${prefix}selectedMovie`,
	default: {} as Movie,
})

export const ColumnSelectorCookieName = `${prefix}ColumnSelector`
export const ColumnVisibilityDefaultState: Set<keyof Actor> = new Set()
export const ColumnVisibilityAtom = atom<Set<keyof Actor>>({
	key: `${prefix}ColumnVisibility`,
	default: ColumnVisibilityDefaultState,
})
