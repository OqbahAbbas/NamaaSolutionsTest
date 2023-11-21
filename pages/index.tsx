import Meta from '@components/Layouts/Meta'
import BaseContainer from '@components/Layouts/Main/Container'
import styled from '@emotion/styled'
import MainLayout from '@components/Layouts/Main'
import initialPropsWrapper from '@helpers/initialPropsWrapper'
import { NextPageWithProps } from '@interfaces/NextPage'
import { ActorRoles } from '@api/Models/Movie/types'
import MovieCard from '@components/Pages/Dashboard/MovieCard'

const movies = [
	{
		title: 'Oppenheimer',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
	{
		title: 'Prestige',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
	{
		title: 'Jumanji',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
	{
		title: 'Kongfu panda',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
	{
		title: 'TMNT',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
	{
		title: 'Spiderman',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
	{
		title: 'Spiderman',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
	{
		title: 'Spiderman',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
	{
		title: 'Spiderman',
		description: 'new description',
		year: 2023,
		actors: [
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
			{
				name: 'cillian murphie',
				age: 43,
				joinDate: '22/01/2021',
				role: ActorRoles.seriesRegular,
			},
		],
	},
]

const Page: NextPageWithProps = () => (
	<>
		<Meta />
		<Container>
			<div className="cardsContainer">
				{movies.map(movie => (
					<MovieCard movie={movie} />
				))}
			</div>
		</Container>
	</>
)

const Container = styled(BaseContainer)`
	padding: 32px 100px;
	background-color: #e8efff;
	min-height: 100vh;
	gap: 32px;

	.cardsContainer {
		display: grid;
		grid-auto-flow: dense;
		gap: 16px;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}
`

Page.getInitialProps = context =>
	initialPropsWrapper(
		async () => ({
			props: {},
		}),
		Page,
		context
	)

Page.getLayout = page => <MainLayout>{page}</MainLayout>

export default Page
