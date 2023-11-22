import { ActorRoles, Movie, SortingModel, ViewModel } from '@api/Models/Movie/types'
import { getRouter } from '@helpers/RouterNexus'
import getLabels from '@helpers/getLabels'
import { atom } from 'recoil'

const prefix = 'Dashboard'

export const MoviesAtom = atom<Movie[]>({
	key: `${prefix}movies`,
	default: [
		{
			id: 1,
			title: 'Oppenheimer',
			description: 'new description',
			year: 2023,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
		{
			id: 2,
			title: 'Prestige',
			description: 'new description',
			year: 2022,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
		{
			id: 3,
			title: 'Jumanji',
			description: 'new description',
			year: 2021,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
		{
			id: 4,
			title: 'Kongfu panda',
			description: 'new description',
			year: 2020,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
		{
			id: 5,
			title: 'TMNT',
			description: 'new description',
			year: 2019,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
		{
			id: 6,
			title: 'Spiderman',
			description: 'new description',
			year: 2018,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
		{
			id: 7,
			title: 'Spiderman2',
			description: 'new description',
			year: 2017,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
		{
			id: 8,
			title: 'Spiderman3',
			description: 'new description',
			year: 2017,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
		{
			id: 9,
			title: 'Spiderman4',
			description: 'new description',
			year: 2017,
			actors: [
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
				{
					name: 'cillian murphie',
					age: 43,
					joinDate: '22/01/2021',
					role: ActorRoles.seriesRegular,
				},
			],
		},
	],
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

export const ColumnSelectorCookieName = `${prefix}ColumnSelector`
export const ColumnVisibilityDefaultState: Set<keyof Movie> = new Set()
export const ColumnVisibilityAtom = atom<Set<keyof Movie>>({
	key: `${prefix}ColumnVisibility`,
	default: ColumnVisibilityDefaultState,
})
