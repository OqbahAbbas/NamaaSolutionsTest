import { IBasicField } from '@forms/components/IBasicField'
import { CalendarProps, DatePickerProps } from 'react-multi-date-picker'

export interface IDatePicker extends IBasicField {
	type: 'DatePicker'
	props?: Omit<CalendarProps, 'onChange'> & DatePickerProps
}
