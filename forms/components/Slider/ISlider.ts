import { IBasicField } from '@forms/components/IBasicField'
import { CSSProperties, ReactElement } from 'react'
import { SliderProps } from '@mui/material'

export interface ISlider extends IBasicField {
	type: 'Slider'
	props?: SliderProps & {
		label: ReactElement | string
		labelStyles?: CSSProperties
	}
}
