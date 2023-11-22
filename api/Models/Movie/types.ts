export enum ActorRoles {
	background = 'Background Role',
	cameo = 'Cameo',
	recurringCharacter = 'Recurring Character',
	sideCharacter = 'Side Character',
	seriesRegular = 'Series Regular',
}

export interface Actor {
	name: string
	age: number
	joinDate: string
	role: ActorRoles
}

export interface Movie {
	id?: number
	title: string
	description: string
	year: number
	actors: Actor[]
}

export interface SortingModel {
	title: string
	val: {
		key: string
		order: string
	}
}

export interface ViewModel {
	title: string
	val: string
}

export interface SelectYearOption {
	title: string
	val: number
}

export interface SelectActorsCountOption {
	title: string
	val: number[]
}
