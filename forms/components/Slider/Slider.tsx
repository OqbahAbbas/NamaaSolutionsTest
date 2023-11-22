import { FC } from 'react'
import { flexGap } from '@admixltd/admix-component-library'
import { IField } from '@forms/generate/types/IField'
import styled from '@emotion/styled'
import classnames from 'classnames'
import { ITheme } from '@styles/theme'
import { Slider as MUISlider } from '@mui/material'
import { ISlider } from './ISlider'

const Slider: FC<IField> = ({ field, index, handleChange, value, error }) => {
	field = field as unknown as ISlider
	const { label, labelStyles, ...other } = field.props ?? {}
	const { name = '' } = field
	return (
		<SliderContainer className={classnames({ hasError: !!error })}>
			<SliderContent>
				<LabelContainer style={labelStyles}>{label}</LabelContainer>
				<MUISlider
					color="primary"
					onChange={(_e: Event, newValue: number | number[]) => {
						handleChange(name, newValue)
					}}
					{...other}
					key={`${name}_${index}`}
					name={name}
					value={(value as number | number[]) ?? 0}
				/>
			</SliderContent>
		</SliderContainer>
	)
}

const LabelContainer = styled.div<{
	$color?: keyof ITheme['colors']
}>`
	color: ${({ theme, $color = 'text' }) => theme.colors[$color]};
	display: inline-flex;
`
const SliderContent = styled.div`
	align-items: center;
	display: flex;
	align-content: center;
	${({ theme }) => flexGap(theme.slider.labelGap)}
`

const SliderContainer = styled.div`
	display: grid;
`

export default Slider
