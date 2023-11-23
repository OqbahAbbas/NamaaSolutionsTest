export default {
	editHeader: 'Edit Movie',
	createHeader: 'Create Movie',
	actions: {
		save: 'Save',
	},
	successes: {
		createSuccess: 'Movie created successfully',
		updateSuccess: 'Movie updated successfully',
		deleteSuccess: 'Movie deleted successfully',
	},
	errors: {
		createFailure: 'The movie already exists, please try another title',
		updateFailure: 'An error happened while trying to update the movie, please try again later',
		deleteFailure: 'An error happened while trying to delete the movie, please try again later',
	},
	fields: {
		title: 'Title',
		description: 'Description',
		year: 'Release Year',
	},
	table: {
		addActor: 'Add Actor',
		columns: {
			id: 'Id',
			name: 'Name',
			age: 'Age',
			joinDate: 'Join Date',
			role: 'Role',
		},
	},
}
