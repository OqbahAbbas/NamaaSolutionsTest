import { ReactComponent as Edit } from '@svg/pages/dashboard/edit.svg'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Button } from '@admixltd/admix-component-library'
import { useRouter } from 'next/router'
import { Movie } from '@api/Models/Movie/types'

const EditButton: FC<PropsWithChildren<{ id: Movie['id']; closeMenu: () => void }>> = ({
	id,
	children,
	closeMenu,
}) => {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	useEffect(() => {
		router.events.on('routeChangeComplete', closeMenu)
		return () => {
			router.events.off('routeChangeComplete', closeMenu)
		}
	}, [])

	return (
		<Button
			disabled={false}
			shineLoading={loading}
			color="text"
			icon={<Edit />}
			onClick={() => {
				if (loading) return
				setLoading(true)
				// router.push(`${pages.attributes.children.attributes.url}/${id}`)
			}}
		>
			{children}
		</Button>
	)
}

export default EditButton
