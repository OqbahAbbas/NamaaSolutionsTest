const dashboard = {
	filters: {
		label: 'المرشحات',
		fields: {
			movieTitle: 'العنوان',
			year: 'سنة الإصدار',
			actorsCount: {
				label: 'عدد الممثلين',
				options: [
					{
						title: 'من 0 إلى 10',
						val: [0, 10],
					},
					{
						title: 'من 11 إلى 20',
						val: [11, 20],
					},
					{
						title: 'من 21 إلى 30',
						val: [21, 30],
					},
					{
						title: 'من 31 إلى 40',
						val: [31, 40],
					},
					{
						title: 'من 41 إلى 50',
						val: [41, 50],
					},
					{
						title: 'أكثر من 50',
						val: [50],
					},
				],
			},
		},
		actions: {
			filter: 'ترشيح',
			clear: 'إلغاء',
		},
	},
	results: 'النتائج',
	view: {
		label: 'العرض',
		options: [
			{
				title: 'قائمة',
				val: 'list',
			},
			{
				title: 'جدول',
				val: 'table',
			},
		],
	},
	sort: {
		label: 'ترتيب حسب',
		options: [
			{
				title: 'العنوان (تصاعدياً)',
				val: {
					key: 'title',
					order: 'ascending',
				},
			},
			{
				title: 'العنوان (تنازلياً)',
				val: {
					key: 'title',
					order: 'descending',
				},
			},
			{
				title: 'سنة الإصدار (تصاعدياً)',
				val: {
					key: 'year',
					order: 'ascending',
				},
			},
			{
				title: 'سنة الإصدار (تنازلياً)',
				val: {
					key: 'year',
					order: 'descending',
				},
			},
			{
				title: 'عدد الممثلين (تصاعدياً)',
				val: {
					key: 'actors',
					order: 'ascending',
				},
			},
			{
				title: 'عدد الممثلين (تنازلياً)',
				val: {
					key: 'actors',
					order: 'descending',
				},
			},
		],
	},
	addMovie: 'إضافة فيلم',
	list: {
		card: {
			released: 'سنة الإصدار: : ',
			actorsCount: 'عدد الممثلين: ',
			actions: {
				viewDetails: 'عرض التفاصيل',
				edit: 'تعديل',
				delete: 'حذف',
			},
		},
	},
	table: {
		errors: {
			noDataSpecified: '-',
			noListLoaded: `حصل خطأ أثناء جلب المعطيات، يرجى المحاولة لاحقاً.`,
		},
		columns: {
			id: 'المعرف',
			title: 'العنوان',
			year: 'سنة الإصدار',
			actorsCount: 'عدد الممثلين',
			actions: {
				menuTitle: 'العمليات',
				edit: 'تعديل',
				delete: {
					label: 'حذف',
					modal: {
						title: 'حذف فيلم',
						description: 'هل أنت متأكد؟ لا يمكن التراجع بعد تنفيذ هذه العملية!',
						confirm: 'حذف',
						cancel: 'تراجع',
					},
				},
			},
		},
		fields: {
			columnSelector: {
				noOptionsText: 'لم يتم العثور على حقول تطابق عملية البحث',
				tooltip: 'اختيار الحقول',
				placeholder: 'عنوان الحقل',
				hideAllLabel: 'إخفاء الكل',
				showAllLabel: 'إظهار الكل',
			},
		},
	},
}

export default dashboard
