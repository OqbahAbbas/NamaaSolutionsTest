import { ReactComponent as Search } from '@svg/Table/search.svg'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Button } from '@admixltd/admix-component-library'
import { useRouter } from 'next/router'
import { Movie } from '@api/Models/Movie/types'
import pages from '@constants/pages'

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
			icon={<Search />}
			onClick={() => {
				if (loading) return
				setLoading(true)
				router.push(`${pages.details.url}/${id}`)
			}}
		>
			{children}
		</Button>
	)
}

export default EditButton
