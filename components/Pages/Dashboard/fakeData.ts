import { Movie } from '@api/Models/Movie/types'
import generateId from '@utils/basic/generateId'

export default [
	{
		id: generateId(),
		title: 'The Shawshank Redemption',
		year: 1994,
		image: `/MoviePlaceholder${Math.floor(Math.random() * 3) + 1}.png`,
		description:
			'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
		actors: [
			{
				id: generateId(),
				name: 'Tim Robbins',
				age: 69,
				joinDate: '1992/01/01',
				role: 'recurringCharacter',
			},
			{
				id: generateId(),
				name: 'Morgan Freeman',
				age: 82,
				joinDate: '1992/01/01',
				role: 'recurringCharacter',
			},
		],
	},
	{
		id: generateId(),
		title: 'The Godfather',
		year: 1972,
		image: `/MoviePlaceholder${Math.floor(Math.random() * 3) + 1}.png`,
		description:
			'on Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
		actors: [
			{
				id: generateId(),
				name: 'Marlon Brando',
				age: 85,
				joinDate: '1970/01/01',
				role: 'recurringCharacter',
			},
		],
	},
	{
		id: generateId(),
		title: 'The Dark Knight',
		year: 2008,
		image: `/MoviePlaceholder${Math.floor(Math.random() * 3) + 1}.png`,
		description:
			'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
		actors: [
			{
				id: generateId(),
				name: 'Morgan Freeman',
				age: 82,
				joinDate: '2004/01/01',
				role: 'sideCharacter',
			},
			{
				id: generateId(),
				name: 'Chin Han',
				age: 50,
				joinDate: '2004/04/01',
				role: 'background',
			},
			{
				id: generateId(),
				name: 'Ritchie Coster',
				age: 55,
				joinDate: '2004/04/01',
				role: 'cameo',
			},
		],
	},
	{
		id: generateId(),
		title: 'Fight Club',
		year: 1999,
		image: `/MoviePlaceholder${Math.floor(Math.random() * 3) + 1}.png`,
		description:
			'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
		actors: [
			{
				id: generateId(),
				name: 'Brad Pitt',
				age: 60,
				joinDate: '1997/12/05',
				role: 'seriesRegular',
			},
			{
				id: generateId(),
				name: 'Chin Han',
				age: 50,
				joinDate: '2004/04/01',
				role: 'background',
			},
			{
				id: generateId(),
				name: 'Ritchie Coster',
				age: 55,
				joinDate: '2004/04/01',
				role: 'cameo',
			},
		],
	},
] as unknown as Movie[]
