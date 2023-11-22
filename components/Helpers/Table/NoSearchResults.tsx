import React from 'react'
import { useGridRootProps } from '@mui/x-data-grid'
import styled from '@emotion/styled'
import NoResults from '@svg/Table/noResults.svg'

export interface NoSearchResultsProps {
	label?: string
}

const NoSearchResults = ({ label }: NoSearchResultsProps) => {
	const {
		localeText: { noResultsOverlayLabel },
	} = useGridRootProps()

	if (!label) label = noResultsOverlayLabel

	return (
		<StyledContainer>
			<div className="imageContainer">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={NoResults} alt={label} />
			</div>
			<div className="labelContainer">{label}</div>
		</StyledContainer>
	)
}

const StyledContainer = styled.div`
	display: grid;
	gap: 16px;
	justify-content: center;
	align-content: center;
	align-items: center;
	margin: 24px;
	.imageContainer {
		img {
			display: block;
			height: 100px;
		}
	}

	.labelContainer {
		font-weight: 400;
		font-size: 18px;
		line-height: 133%;
		text-align: center;

		color: ${({ theme }) => theme.colors.gray700};
	}
`

export default NoSearchResults
