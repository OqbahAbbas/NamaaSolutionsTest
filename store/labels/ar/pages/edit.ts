export default {
	editHeader: 'تعديل فيلم',
	createHeader: 'إضافة فيلم',
	actions: {
		save: 'حفظ',
	},
	successes: {
		createSuccess: 'تم إضافة فيلم بنجاح',
		updateSuccess: 'تم تعديل الفيلم بنجاح',
		deleteSuccess: 'تم حذف الفيلم بنجاح',
	},
	errors: {
		createFailure: 'هذا الفيلم موجود مسبقاً، يرجى تغيير الاسم',
		updateFailure: 'حصل خطأ أثناء محاولة تعديل الفيلم يرجى المحاولة لاحقاً',
		deleteFailure: 'حصل خطأ أثناء محاولة حذف الفيلم، يرجى المحاولة لاحقاً',
	},
	fields: {
		title: 'العنوان',
		description: 'الوصف',
		year: 'سنة الإصدار',
	},
	table: {
		addActor: 'إضافة ممثل',
		columns: {
			id: 'المعرف',
			name: 'الاسم',
			age: 'العمر',
			joinDate: 'تاريخ الانضمام',
			role: 'الدور',
		},
	},
}
