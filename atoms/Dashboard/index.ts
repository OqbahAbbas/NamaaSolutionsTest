import { Movie, SortingModel, ViewModel } from '@api/Models/Movie/types'
import { getRouter } from '@helpers/RouterNexus'
import getLabels from '@helpers/getLabels'
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
	default:
		getRouter().locale === 'ar'
			? {
					title: 'العنوان (تصاعدياً)',
					val: {
						key: 'title',
						order: 'ascending',
					},
			  }
			: {
					title: 'Title (Ascending)',
					val: {
						key: 'title',
						order: 'ascending',
					},
			  },
})

export const ViewMoviesAtom = atom<ViewModel>({
	key: `${prefix}viewMovies`,
	default: getLabels().pages.dashboard.view.options[0],
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
