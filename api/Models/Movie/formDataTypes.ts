import { Actor } from './types'

export interface FormDataProps {
	id: string
	title: string
	description: string
	year: number
	actors: Actor[]
	image: string
}
