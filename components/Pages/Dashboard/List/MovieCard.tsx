import { Tooltip } from '@admixltd/admix-component-library'
import styled from '@emotion/styled'
import { Movie } from '@api/Models/Movie/types'
import { ButtonBase, Menu, MenuItem } from '@mui/material'
import { ReactComponent as MenuIcon } from '@svg/pages/dashboard/menu.svg'
import LabelsAtom from '@atoms/Labels'
import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import { useRouter } from 'next/router'
import pages from '@constants/pages'

const MovieCard = ({ movie }: { movie: Movie }) => {
	const { released, actorsCount, actions } = useRecoilValue(LabelsAtom).pages.dashboard.list.card
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const { title, year, actors, image } = movie ?? {}

	const router = useRouter()
	const handleEdit = () => {
		router.push(`${pages.dashboard.url}${movie.id}`)
	}

	return (
		<>
			<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
				<MenuItem onClick={handleEdit}>{actions.edit}</MenuItem>
				<MenuItem>{actions.delete}</MenuItem>
			</Menu>
			<Container>
				<div className="imageContainer">
					<img height={200} src={image} alt={title} className="img" />
				</div>
				<div
					className="actions"
					onClick={e => {
						e.stopPropagation()
						setAnchorEl(e.currentTarget)
					}}
				>
					<MenuIcon />
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
							<span className="value">
								{Array.isArray(actors) ? actors.length : 0}
							</span>
						</div>
					</div>
				</Info>
			</Container>
		</>
	)
}

export const Container = styled(ButtonBase)`
	display: grid;
	grid-auto-flow: row;
	width: 320px;
	position: relative;

	${({ theme }) => theme.adaptive.xxs} {
		width: 200px;
	}

	background: ${({ theme }) => theme.colors.white};
	position: relative;
	border-radius: 16px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

	.imageContainer {
		height: 200px;
		max-width: 320px;
		border-radius: 16px 16px 0 0;
		overflow: hidden;

		${({ theme }) => theme.adaptive.xxs} {
			max-width: 200px;
		}

		.img {
			object-fit: cover;
			width: 320px;
			border-radius: 16px 16px 0 0;
			transition: all 0.3s ease-in-out 0s;
			overflow-clip-margin: content-box;
			overflow: clip;
			&:hover {
				transform: scale(1.2);
			}

			${({ theme }) => theme.adaptive.xxs} {
				width: 200px;
			}
		}
	}

	.actions {
		position: absolute;
		height: 30px;
		top: 10px;
		right: 10px;
		padding: 2px;

		svg {
			width: 30px;
			height: 30px;
			transform: rotate(90deg) !important;
			[fill] {
				fill: ${({ theme }) => theme.colors.primary};
			}
			[stroke] {
				stroke: ${({ theme }) => theme.colors.primary};
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
		font-size: 20px;
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

		${({ theme }) => theme.adaptive.xxs} {
			grid-auto-flow: row;
			justify-content: center;
		}

		.label {
			color: ${({ theme }) => theme.colors.primary};
			font-size: 14px;
			font-weight: 500;
		}

		.value {
			color: ${({ theme }) => theme.colors.secondary};
			font-size: 14px;
		}
	}
`

export default MovieCard
