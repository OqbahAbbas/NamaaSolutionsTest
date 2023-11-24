import { SomeObject } from '@admixltd/admix-component-library'
import generateId from '@utils/basic/generateId'
import { FormDataProps } from './formDataTypes'
import { Actor, ActorRoles, Movie } from './types'

export const movieToFormData: (movie: Movie) => SomeObject = movie => {
	const formData: SomeObject = {}
	const { id, title, year, description, actors, image } = movie

	formData.id = id ?? ''
	formData.title = title ?? ''
	formData.year = year ?? null
	formData.description = description ?? ''
	formData.actors = actors
	formData.image = image

	if (actors) {
		actors.forEach(actor => {
			formData[`${actor.id}-name`] = actor.name
			formData[`${actor.id}-age`] = actor.age
			formData[`${actor.id}-role`] = {
				title: ActorRoles[actor.role as unknown as keyof typeof ActorRoles],
				val: actor.role,
			}
			formData[`${actor.id}-joinDate`] = actor.joinDate
		})
	}

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

	const placeholderIndex = Math.floor(Math.random() * 3) + 1
	movie.image = `/MoviePlaceholder${placeholderIndex}.png`

	const actors: Actor[] = []
	const ids: string[] = []

	Object.keys(formData).forEach(key => {
		if (key.endsWith('-joinDate')) {
			const actorId = dataPrefix
				? key.split(dataPrefix)[1].split('-joinDate')[0]
				: key.split('-joinDate')[0]
			ids.push(actorId)
		}
	})

	ids.forEach(id => {
		const role = formData[dataPrefix ? `${dataPrefix}${id}-role` : `${id}-role`] as {
			title: string
			val: ActorRoles
		}
		const actor: Actor = {
			id,
			name: formData[dataPrefix ? `${dataPrefix}${id}-name` : `${id}-name`] as string,
			age: formData[dataPrefix ? `${dataPrefix}${id}-age` : `${id}-age`] as number,
			joinDate: formData[
				dataPrefix ? `${dataPrefix}${id}-joinDate` : `${id}-joinDate`
			] as string,
			role: role.val,
		}
		actors.push(actor)
	})

	movie.actors = actors

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
	movie.image = formData[dataPrefix ? `${dataPrefix}image` : 'image'] as string

	const actors: Actor[] = []
	const ids: string[] = []

	Object.keys(formData).forEach(key => {
		if (key.endsWith('-joinDate')) {
			const actorId = dataPrefix
				? key.split(dataPrefix)[1].split('-joinDate')[0]
				: key.split('-joinDate')[0]
			ids.push(actorId)
		}
	})
	ids.forEach(id => {
		const role = formData[dataPrefix ? `${dataPrefix}${id}-role` : `${id}-role`] as {
			title: string
			val: ActorRoles
		}
		const actor: Actor = {
			id,
			name: formData[dataPrefix ? `${dataPrefix}${id}-name` : `${id}-name`] as string,
			age: formData[dataPrefix ? `${dataPrefix}${id}-age` : `${id}-age`] as number,
			joinDate: formData[
				dataPrefix ? `${dataPrefix}${id}-joinDate` : `${id}-joinDate`
			] as string,
			role: role.val,
		}
		actors.push(actor)
	})

	movie.actors = actors
	return movie
}
