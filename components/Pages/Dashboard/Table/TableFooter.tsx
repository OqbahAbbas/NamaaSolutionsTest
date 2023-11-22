import { useRecoilValue } from 'recoil'

import styled from '@emotion/styled'
import LabelsAtom from '@atoms/Labels'
import { Pagination } from '@admixltd/admix-component-library/Table'
import { useRouter } from 'next/router'
import { ActiveMoviesAtom } from '@atoms/Dashboard'
import { useResponsive } from '@hooks/useResponisve'

const TableFooter = () => {
	const tableData = useRecoilValue(ActiveMoviesAtom) ?? []
	const labels = useRecoilValue(LabelsAtom).pages.dashboard.table.footer
	const locale = useRouter().locale ?? 'en'
	const { mobileOnly } = useResponsive()
	return (
		<FooterContainer locale={locale}>
			<div />
			<Pagination
				{...{
					pageSize: tableData.length,
					rowCount: tableData.length,
					page: 0,
					labelRowsPerPage: !mobileOnly ? labels.rowsPerPage : '',
					pageCounter: (from, to, total) => labels.pageCounter(from, to, total),
				}}
			/>
		</FooterContainer>
	)
}

const FooterContainer = styled.div<{
	locale: string
}>`
	height: 65px;

	display: flex;
	flex-shrink: 0;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.gray300};
	align-items: center;

	.NavigationButtons {
		transform: ${({ locale }) => (locale === 'ar' ? 'scaleX(-1)' : 'scaleX(1)')};
		direction: ${({ locale }) => (locale === 'ar' ? 'rtl' : 'ltr')};
	}
`

export default TableFooter
