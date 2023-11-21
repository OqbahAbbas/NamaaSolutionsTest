import ContentGenerator from './Components/ContentGenerator'
import { MenuContentItem } from './Components/types'
import LanguageButton from './Components/LanguageButton'

const MenuContent = () => {
	const LeftContent: MenuContentItem[] = []

	const RightContent: MenuContentItem[] = [
		{
			component: () => <LanguageButton />,
		},
	]

	return (
		<>
			<div>{ContentGenerator(LeftContent)}</div>
			<div>{ContentGenerator(RightContent)}</div>
		</>
	)
}

export default MenuContent
