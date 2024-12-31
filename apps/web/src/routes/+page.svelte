<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/ui/footer/footer.svelte';
	import SearchHeader from '$lib/components/search-header.svelte';
	import FilterNav from '$lib/components/filter-nav.svelte';
	import WorkCard from '$lib/components/work-card.svelte';

	const data = [
		{
			id: '66969dfd865df87988ef2304',
			userId: 'user_2jKrWRREPbqBPOX8M6go4wYSIlE',
			title: 'l.',
			description: 'knlk',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/b099d851-88ca-4826-a72f-0d54a601bef1.JPG',
			liveSiteUrl: 'asdkja;sl@gmail.com',
			githubUrl: 'https://github.com/salimi-my/shadcn-ui-sidebar',
			category: 'Web Design',
			createdAt: '2024-07-16T16:21:17.488Z',
			updatedAt: '2024-07-16T16:21:17.488Z'
		},
		{
			id: '665e2c0c9b9bfd50222aac6b',
			userId: 'user_2hK87ZhkFyLd8Lzz0E8hdptmOzJ',
			title: '123',
			description: '123',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/67228baa-22ac-45c2-bcca-6a0abe15ebaf.jpg',
			liveSiteUrl: '123',
			githubUrl: '123',
			category: 'Typography',
			createdAt: '2024-06-03T20:48:11.248Z',
			updatedAt: '2024-06-03T20:48:11.248Z'
		},
		{
			id: '664f5df42b61212ab83d96ce',
			userId: 'user_2gsDDB3BwbT5LS34CEmZoaGk14A',
			title: 'test post',
			description: 'dfgdfg',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/1172df19-9cc0-44fe-a7ba-262f5043b9a0.png',
			liveSiteUrl: 'dfggdf',
			githubUrl: 'dfgdfg',
			category: 'Web Design',
			createdAt: '2024-05-23T15:17:06.828Z',
			updatedAt: '2024-05-23T15:17:58.037Z'
		},
		{
			id: '65afbcd088ee2ac67d86f6ec',
			userId: 'user_2bMCz9fNHW4UXD04RsbqmgNWnS4',
			title: 'messi',
			description: 'ashkFNI JN AIPAGN=w0ni',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/f2da6bb8-aa93-48bd-a774-a4d77fee5a9e.jpg',
			liveSiteUrl: 'https://temp-mail.org/en/view/65afbc44622db301ca145d08',
			githubUrl: 'https://temp-mail.org/en/view/65afbc44622db301ca145d08',
			category: 'Web Design',
			createdAt: '2024-01-23T13:19:11.085Z',
			updatedAt: '2024-01-23T13:19:11.085Z'
		},
		{
			id: '658170c6339a3363aead0ae7',
			userId: 'user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z',
			title: 'Web Design Digital',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quod delectus, quos id porro reiciendis in laudantium officia incidunt!',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/9e4b8533-ad93-4952-9966-71ce0cf61ecf.jpg',
			liveSiteUrl: 'https://www.salimi.my',
			githubUrl: 'https://github.com/salimi-my',
			category: 'Web Design',
			createdAt: '2023-12-19T10:30:30.813Z',
			updatedAt: '2023-12-19T10:30:30.813Z'
		},
		{
			id: '658170a7339a3363aead0ae6',
			userId: 'user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z',
			title: 'We Design Modern',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/445fa7ae-0b1c-4d18-9484-3d460536ed49.jpg',
			liveSiteUrl: 'https://www.salimi.my',
			githubUrl: 'https://github.com/salimi-my',
			category: 'Web Design',
			createdAt: '2023-12-19T10:29:59.055Z',
			updatedAt: '2023-12-19T13:27:26.534Z'
		},
		{
			id: '65817087339a3363aead0ae5',
			userId: 'user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z',
			title: 'Technology and Art',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/d5e49a0e-8e25-455b-b13d-90cab9ca6057.jpg',
			liveSiteUrl: 'https://www.salimi.my',
			githubUrl: 'https://github.com/salimi-my',
			category: 'Web Design',
			createdAt: '2023-12-19T10:29:27.300Z',
			updatedAt: '2023-12-19T10:29:27.300Z'
		},
		{
			id: '65817068339a3363aead0ae4',
			userId: 'user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z',
			title: 'Proven Performance',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/8a3259da-e756-4a6e-9e53-42a9006751e1.jpg',
			liveSiteUrl: 'https://www.salimi.my',
			githubUrl: 'https://github.com/salimi-my',
			category: 'Typography',
			createdAt: '2023-12-19T10:28:56.167Z',
			updatedAt: '2023-12-19T10:28:56.167Z'
		},
		{
			id: '6581704d339a3363aead0ae3',
			userId: 'user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z',
			title: 'Problem Solving is Our Choice',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/c49e38d3-a669-4a22-81f6-65b03beefa13.jpg',
			liveSiteUrl: 'https://www.salimi.my',
			githubUrl: 'https://github.com/salimi-my',
			category: 'Product Design',
			createdAt: '2023-12-19T10:28:29.049Z',
			updatedAt: '2023-12-19T10:28:29.049Z'
		},
		{
			id: '6581702e339a3363aead0ae2',
			userId: 'user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z',
			title: 'Pizza Burgers and the Rest',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/9a335d7b-4a36-47b7-bbc2-7e0aca66936b.jpg',
			liveSiteUrl: 'https://www.salimi.my',
			githubUrl: 'https://github.com/salimi-my',
			category: 'Print',
			createdAt: '2023-12-19T10:27:58.346Z',
			updatedAt: '2023-12-19T10:27:58.346Z'
		},
		{
			id: '65817004339a3363aead0ae1',
			userId: 'user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z',
			title: 'Innovation Technology of Space',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/12ea01da-e4b2-4c71-adc6-b5a499780e84.jpg',
			liveSiteUrl: 'https://www.salimi.my',
			githubUrl: 'https://github.com/salimi-my',
			category: 'Mobile',
			createdAt: '2023-12-19T10:27:16.893Z',
			updatedAt: '2023-12-19T10:27:16.893Z'
		},
		{
			id: '65816fd9339a3363aead0ae0',
			userId: 'user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z',
			title: 'Event Agency',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!',
			image:
				'https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/c94719ac-f72c-4ad6-a8ba-10bf917d5892.jpg',
			liveSiteUrl: 'https://www.salimi.my',
			githubUrl: 'https://github.com/salimi-my',
			category: 'Illustration',
			createdAt: '2023-12-19T10:26:33.167Z',
			updatedAt: '2023-12-19T10:26:33.167Z'
		}
	];
</script>

<Navbar></Navbar>
<main
	class="min-h-[calc(100vh-100px-428.44px)] md:min-h-[calc(100vh-100px-332.44px)] lg:min-h-[calc(100vh-100px-254.44px)]"
>
	<SearchHeader search={''} />
	<section class="flex flex-col items-center justify-start px-5 py-6 lg:px-20">
		<FilterNav />
		<section
			class={'grid w-full gap-9 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:pt-8 xl:grid-cols-4 xl:gap-12'}
		>
			{#each data as work}
				<WorkCard {work} isProfile={false} />
			{/each}
		</section>
	</section>
</main>
<Footer></Footer>
