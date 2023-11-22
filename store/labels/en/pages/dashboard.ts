const dashboard = {
	filters: {
		label: 'Filters',
		fields: {
			movieTitle: 'Title',
			year: 'Year',
			actorsCount: {
				label: 'Actors Count',
				options: [
					{
						title: '0 to 10',
						val: [0, 10],
					},
					{
						title: '11 to 20',
						val: [11, 20],
					},
					{
						title: '21 to 30',
						val: [21, 30],
					},
					{
						title: '31 to 40',
						val: [31, 40],
					},
					{
						title: '41 to 50',
						val: [41, 50],
					},
					{
						title: 'more than 50',
						val: [50],
					},
				],
			},
		},
		actions: {
			filter: 'Filter',
			clear: 'Clear',
		},
	},
	results: 'Results',
	view: {
		label: 'View',
		options: [
			{
				title: 'List',
				val: 'list',
			},
			{
				title: 'Table',
				val: 'table',
			},
		],
	},
	sort: {
		label: 'Sort By',
		options: [
			{
				title: 'Title (Ascending)',
				val: {
					key: 'title',
					order: 'ascending',
				},
			},
			{
				title: 'Title (Descending)',
				val: {
					key: 'title',
					order: 'descending',
				},
			},
			{
				title: 'Release Year (Ascending)',
				val: {
					key: 'year',
					order: 'ascending',
				},
			},
			{
				title: 'Release Year (Descending)',
				val: {
					key: 'year',
					order: 'descending',
				},
			},
			{
				title: 'Actors Count (Ascending)',
				val: {
					key: 'actors',
					order: 'ascending',
				},
			},
			{
				title: 'Actors Count (Descending)',
				val: {
					key: 'actors',
					order: 'descending',
				},
			},
		],
	},
	list: {
		card: {
			released: 'Released: ',
			actorsCount: 'Actors count: ',
		},
	},
	table: {
		errors: {
			noDataSpecified: '-',
			noListLoaded: `Unable to get the list of movies. Please, try again later..`,
		},
		columns: {
			id: 'Id',
			title: 'Title',
			year: 'Release Year',
			actorsCount: 'Actors Count',
			actions: {
				menuTitle: 'Actions',
				edit: 'Edit',
				delete: {
					label: 'Delete',
					modal: {
						title: 'Delete Movie',
						description:
							'This is irreversible, are you sure you want to delete this attribute?',
						confirm: 'Delete',
						cancel: 'Cancel',
					},
				},
			},
		},
		fields: {
			columnSelector: {
				noOptionsText: 'No columns',
				tooltip: 'Column selector',
				placeholder: 'Column title',
				hideAllLabel: 'Hide all',
				showAllLabel: 'Show all',
			},
		},
		footer: {
			rowsPerPage: 'Rows per page:',
			pageCounter: (from: number, to: number, total: number) => `${from}-${to} from ${total}`,
		},
	},
}

export default dashboard
