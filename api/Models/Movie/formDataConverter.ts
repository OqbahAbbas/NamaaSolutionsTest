import { SomeObject } from '@admixltd/admix-component-library'
import generateId from '@utils/basic/generateId'
import { FormDataProps } from './formDataTypes'
import { Actor, Movie } from './types'

export const movieToFormData: (movie: Movie) => Partial<FormDataProps> = movie => {
	const formData: Partial<FormDataProps> = {}
	const { id, title, year, description, actors, image } = movie

	formData.id = id ?? ''
	formData.title = title ?? ''
	formData.year = year ?? null
	formData.description = description ?? ''
	formData.actors = actors
	formData.image = image

	return formData
}

export const createFormDataToMovie: ({
	formData,
	dataPrefix,
}: {
	formData: SomeObject
	dataPrefix?: string
}) => Partial<FormDataProps> = ({ formData, dataPrefix }) => {
	const movie: Partial<FormDataProps> = {}
	movie.id = generateId()
	movie.title = formData[dataPrefix ? `${dataPrefix}title` : 'title'] as string
	movie.description = formData[dataPrefix ? `${dataPrefix}description` : 'description'] as string
	movie.year = formData[dataPrefix ? `${dataPrefix}year` : 'year'] as number
	movie.actors = formData[dataPrefix ? `${dataPrefix}actors` : 'actors'] as Actor[]

	const placeholderIndex = Math.floor(Math.random() * 3) + 1
	movie.image = `/MoviePlaceholder${placeholderIndex}.png`

	return movie
}

export const editFormDataToMovie: ({
	formData,
	dataPrefix,
}: {
	formData: SomeObject
	dataPrefix?: string
}) => Partial<FormDataProps> = ({ formData, dataPrefix }) => {
	const movie: Partial<FormDataProps> = {}
	movie.id = formData[dataPrefix ? `${dataPrefix}id` : 'id'] as string
	movie.title = formData[dataPrefix ? `${dataPrefix}title` : 'title'] as string
	movie.description = formData[dataPrefix ? `${dataPrefix}description` : 'description'] as string
	movie.year = formData[dataPrefix ? `${dataPrefix}year` : 'year'] as number
	movie.actors = formData[dataPrefix ? `${dataPrefix}actors` : 'actors'] as Actor[]
	movie.image = formData[dataPrefix ? `${dataPrefix}image` : 'image'] as string
	return movie
}
