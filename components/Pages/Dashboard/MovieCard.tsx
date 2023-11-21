import { Tooltip } from '@admixltd/admix-component-library'
import styled from '@emotion/styled'
import { Movie } from '@api/Models/Movie/types'
import { ButtonBase } from '@mui/material'
import LabelsAtom from '@atoms/Labels'
import { useRecoilValue } from 'recoil'

const MovieCard = ({ movie }: { movie: Movie }) => {
	const { released, actorsCount } = useRecoilValue(LabelsAtom).pages.dashboard.list.card
	const { title, year, actors } = movie ?? {}

	return (
		<Container>
			<div className="imageContainer">
				<img height={280} src="/MoviePlaceholder.webp" alt={title} className="img" />
			</div>
			<Info>
				<Tooltip title={title}>
					<h1>{!title ? '- -' : title}</h1>
				</Tooltip>
				<div className="details">
					<div>
						<span className="label">{released}</span>
						<span className="value">{year ?? '- -'}</span>
					</div>
					<div>
						<span className="label">{actorsCount}</span>
						<span className="value">{Array.isArray(actors) ? actors.length : 0}</span>
					</div>
				</div>
			</Info>
		</Container>
	)
}

export const Container = styled(ButtonBase)`
	display: grid;
	grid-auto-flow: row;
	width: 280px;

	background: ${({ theme }) => theme.colors.white};
	position: relative;
	border-radius: 16px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

	.imageContainer {
		height: 280px;
		max-width: 280px;
		border-radius: 16px 16px 0 0;
		overflow: hidden;

		.img {
			object-fit: cover;
			width: 280px;
			border-radius: 16px 16px 0 0;
			transition: all 0.3s ease-in-out 0s;
			overflow-clip-margin: content-box;
			overflow: clip;
			&:hover {
				transform: scale(1.2);
			}
		}
	}
`

export const Info = styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 12px;
	padding: 10px 16px;

	h1 {
		font-size: 16px;
		font-weight: bold;
		width: 100%;
		text-align: center;
		color: ${({ theme }) => theme.colors.primary};
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.details {
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		align-items: center;

		.label {
			color: ${({ theme }) => theme.colors.primary};
			font-size: 14;
			font-weight: 500;
		}

		.value {
			color: ${({ theme }) => theme.colors.secondary};
			font-size: 14;
		}
	}
`

export default MovieCard
