import styled from '@emotion/styled'
import { Movie } from '@api/Models/Movie/types'
import { Tooltip } from '@admixltd/admix-component-library'

const Details = ({ movie }: { movie: Movie }) => {
	const { title, year, description, image } = movie ?? {}

	return (
		<Container>
			<div className="imageContainer">
				<img height={300} width={200} src={image} alt={title} className="img" />
			</div>
			<div className="info">
				<div className="titleContainer">
					<Tooltip title={title}>
						<span className="title">{title}</span>
					</Tooltip>
					<span className="year">{`(${year})`}</span>
				</div>
				<div className="description">{description}</div>
			</div>
		</Container>
	)
}

export const Container = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-content: start;
	align-items: start;
	gap: 32px;
	margin-bottom: 16px;

	${({ theme }) => theme.adaptive.md} {
		grid-auto-flow: row;
		justify-content: center;
	}

	.imageContainer {
		height: 300px;
		max-width: 200px;
		border-radius: 16px;
		overflow: hidden;

		img {
			object-fit: cover;
			border-radius: 16px;
			transition: all 0.3s ease-in-out 0s;
			overflow-clip-margin: content-box;
			overflow: clip;
			&:hover {
				transform: scale(1.2);
			}
		}
	}

	.info {
		display: grid;
		grid-auto-flow: row;
		justify-content: start;
		align-items: start;

		.titleContainer {
			display: grid;
			grid-auto-flow: column;
			align-items: center;
			justify-content: start;
			gap: 8px;

			.title {
				font-size: 32px;
				font-weight: bold;
				color: ${({ theme }) => theme.colors.primary};
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				max-width: 200px;
			}

			.year {
				font-size: 14px;
				color: ${({ theme }) => theme.colors.secondary};
			}
		}

		.description {
			max-height: 250px;
			font-size: 14px;
			color: ${({ theme }) => theme.colors.secondary};
			overflow-y: scroll;
		}
	}
`

export default Details
