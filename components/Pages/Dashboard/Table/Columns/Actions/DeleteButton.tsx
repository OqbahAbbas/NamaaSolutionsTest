import { ReactComponent as Close } from '@svg/pages/dashboard/close.svg'
import { FC, PropsWithChildren, useEffect } from 'react'
import { Button } from '@admixltd/admix-component-library'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { getModal } from '@helpers/HooksNexus'
import { useRecoilValue } from 'recoil'
import LabelsAtom from '@atoms/Labels'
import { ModalTypes } from '@components/Helpers/Modals/Modal'
import { Movie } from '@api/Models/Movie/types'
import { getCookie, setCookie } from 'cookies-next'
import { MoviesAtom, MoviesCookieName } from '@atoms/Dashboard'
import { Snackbar } from '@admixltd/admix-component-library/Snackbar'
import { setRecoil } from '@admixltd/admix-component-library/RecoilNexus'

const DeleteButton: FC<PropsWithChildren<{ id: Movie['id']; closeMenu: () => void }>> = ({
	id,
	children,
	closeMenu,
}) => {
	const router = useRouter()
	useEffect(() => {
		router.events.on('routeChangeComplete', closeMenu)
		return () => {
			router.events.off('routeChangeComplete', closeMenu)
		}
	}, [])

	const { edit } = useRecoilValue(LabelsAtom).pages
	const { columns } = useRecoilValue(LabelsAtom).pages.dashboard.table

	const { title, description, confirm, cancel } = columns.actions.delete.modal
	const { successes } = edit

	const handleDelete = () => {
		const moviesCookie = getCookie(MoviesCookieName)
		const moviesArray = moviesCookie ? (JSON.parse(moviesCookie as string) as Movie[]) : []
		const updatedMoviesArray = moviesArray.filter(movie => movie.id !== id)
		setCookie(MoviesCookieName, JSON.stringify(updatedMoviesArray))
		setRecoil(MoviesAtom, updatedMoviesArray)
		Snackbar.success(successes.deleteSuccess)
	}

	const props = {
		type: ModalTypes.delete,
		labels: {
			title,
			description,
			confirm,
			cancel,
		},
		onConfirm: handleDelete,
	}

	const getDeleteModal = () => {
		const DeleteModal = dynamic(() => import('@components/Helpers/Modals/Modal'))
		getModal()?.showModal(DeleteModal, props)
	}

	return (
		<Button
			disabled={false}
			color="text"
			icon={<Close />}
			onClick={() => {
				getDeleteModal()
				closeMenu()
			}}
		>
			{children}
		</Button>
	)
}

export default DeleteButton
