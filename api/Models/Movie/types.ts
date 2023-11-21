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
	title: string
	description: string
	year: number
	actors: Actor[]
}
