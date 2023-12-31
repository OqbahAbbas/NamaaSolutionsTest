import { FC } from 'react'
import { Input } from '@admixltd/admix-component-library'
import { IRegularInputField } from '@forms/components/RegularInput/IRegularInputField'
import { IField } from '@forms/generate/types/IField'
import { getRouter } from '@helpers/RouterNexus'

const RegularInput: FC<IField> = ({
	field,
	index,
	handleChange,
	value,
	error,
	extraProps = {},
}) => {
	field = field as IRegularInputField
	return (
		<Input
			{...extraProps.input}
			{...field.props}
			key={`${field.name}_${index}`}
			name={field.name}
			value={value || ''}
			error={error}
			onChange={e => handleChange(field.name ?? '', e.target.value)}
			style={getRouter()?.locale === 'ar' ? { fontFamily: 'Cairo' } : {}}
		/>
	)
}

export default RegularInput
