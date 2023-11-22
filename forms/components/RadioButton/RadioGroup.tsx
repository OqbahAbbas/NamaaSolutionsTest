import { FC } from 'react'
import { IField } from '@forms/generate/types/IField'
import { FormControlLabel, Radio, RadioGroup, buttonBaseClasses } from '@mui/material'
import styled from '@emotion/styled'
import { ITheme } from '@admixltd/admix-component-library/styles/theme'
import { IRadioGroup } from './IRadioGroup'
import ErrorText from '../ErrorText'
import theme from '@styles/theme'
import { FONT_FAMILY } from '@constants/media'

const RadioGroupComponent: FC<IField> = ({ field, handleChange, value, error }) => {
	field = field as IRadioGroup
	const { options, label, color = 'primary', ...other } = field.props ?? {}
	const { name = '' } = field
	return (
		<Container color={error ? 'error' : color}>
			<div className="label">{label}</div>
			<RadioGroup
				row
				value={value}
				onChange={(e, val) => {
					handleChange(name, val)
				}}
				{...other}
			>
				{options?.map(option => (
					<FormControlLabel
						style={{ fontFamily: FONT_FAMILY.ar }}
						key={option.id}
						value={option.id}
						control={
							<Radio
								style={{ color: theme.colors.primary, fontFamily: FONT_FAMILY.ar }}
								size="medium"
							/>
						}
						label={option.name}
						sx={{
							'& .MuiTypography-root': {
								fontFamily: FONT_FAMILY.ar,
							},
						}}
					/>
				))}
			</RadioGroup>
			{error && <ErrorText>{error}</ErrorText>}
		</Container>
	)
}

const Container = styled.div<{ color: keyof ITheme['colors'] }>`
	display: grid;
	grid-auto-flow: row;

	.${buttonBaseClasses.root} {
		color: ${({ theme, color }) => theme.colors[color]};
	}
`

export default RadioGroupComponent
