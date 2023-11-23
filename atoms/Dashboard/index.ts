import { Actor, Movie, SortingModel, ViewModel } from '@api/Models/Movie/types'
import { atom } from 'recoil'

const prefix = 'Dashboard'

export const MoviesAtom = atom<Movie[]>({
	key: `${prefix}movies`,
	default: [],
})

export const MoviesFiltersAtom = atom({
	key: `${prefix}moviesFilters`,
	default: {},
})

export const ActiveMoviesAtom = atom<Movie[]>({
	key: `${prefix}activeMovies`,
	default: [],
})

export const SortMoviesAtom = atom<SortingModel>({
	key: `${prefix}sortMovies`,
	default: {
		title: 'Title (Ascending)',
		val: {
			key: 'title',
			order: 'ascending',
		},
	},
})

export const ViewMoviesAtom = atom<ViewModel>({
	key: `${prefix}viewMovies`,
	default: {
		title: 'List',
		val: 'list',
	},
})

export const MoviesCookieName = `${prefix}Movies`

export const ColumnSelectorCookieName = `${prefix}ColumnSelector`
export const ColumnVisibilityDefaultState: Set<keyof Movie> = new Set()
export const ColumnVisibilityAtom = atom<Set<keyof Movie>>({
	key: `${prefix}ColumnVisibility`,
	default: ColumnVisibilityDefaultState,
})

export const MovieEditFormUpdatedAtom = atom({
	key: `${prefix}movieEditFormUpdated`,
	default: false,
})

export const MovieEditFormLoadingAtom = atom({
	key: `${prefix}movieEditFormLoading`,
	default: false,
})

export const EditSelectedMovieAtom = atom<Movie>({
	key: `${prefix}editSelectedMovie`,
	default: {} as Movie,
})

export const EditActorsTableDataAtom = atom<Actor[]>({
	key: `${prefix}editActorsTableData`,
	default: [],
})
