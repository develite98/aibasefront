<script lang="ts">
	import { onMount } from 'svelte';
	import { Bookmark, Heart } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { Skeleton } from './ui/skeleton';
	import AvatarImage from './ui/avatar/avatar-image.svelte';
	import Avatar from './ui/avatar/avatar.svelte';

	export let work;
	export let isProfile = false;
	export let isMoreWorks = false;
	export let isAlsoLikeWorks = false;

	let profileData: any = null;
	let isLoading = true;

	const randomNumber = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	onMount(async () => {
		profileData = {
			user: {
				imageUrl:
					'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yWXplRkxPcnEwQkZCa1NxckJnYjlZcVdJbEgiLCJyaWQiOiJ1c2VyXzJiTUN6OWZOSFc0VVhEMDRSc2JxbWdOV25TNCJ9',
				firstName: 'John',
				lastName: 'Doe'
			},
			profile: {
				username: 'johndoe'
			}
		};

		isLoading = false;
	});

	$: profileData = profileData;
	$: isLoading = isLoading;
</script>

<div class="flex flex-col gap-2">
	<a
		href={`/work/${work.id}`}
		class={`group relative w-full overflow-hidden ${isProfile ? 'h-[260px] lg:h-[225px] xl:h-[360px]' : 'h-[260px] lg:h-[225px] xl:h-[260px]'} ${isMoreWorks ? 'h-[260px] xl:h-[200px]' : ''}`}
	>
		<img
			src={work.image}
			alt={work.title}
			class="h-full w-full rounded-lg object-cover contrast-[0.95]"
		/>
		<div
			class="bg-card-info absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end rounded-lg p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
		>
			<div class="flex w-full items-center justify-between">
				<div class="w-1/2 truncate font-medium text-white">
					{work.title}
				</div>
				<div class="flex justify-end">
					<div class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white">
						<Bookmark size={16} />
					</div>
					<div class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white">
						<Heart size={16} />
					</div>
				</div>
			</div>
		</div>
	</a>

	{#if !isProfile && !isMoreWorks}
		<div class="flex items-center justify-between">
			{#if isLoading}
				<div class="flex w-full items-center justify-start space-x-2">
					<Skeleton class="h-6 w-6 rounded-full" />
					<Skeleton class="h-5 w-1/2" />
				</div>
			{:else if profileData}
				<a
					href={`/${profileData.profile.username}`}
					class="flex w-full items-center justify-start space-x-2"
				>
					<Avatar class="h-6 w-6 border">
						{profileData.user.firstName.charAt(0)}{profileData.user.lastName.charAt(0)}
					</Avatar>
					<p class="w-1/2 truncate text-sm font-medium">
						{profileData.user.firstName}
						{profileData.user.lastName}
					</p>
				</a>
			{/if}

			{#if !isAlsoLikeWorks}
				<div class="flex items-center gap-2">
					<div class="flex items-center space-x-[2px]">
						{#if isLoading}
							<Skeleton class="h-5 w-10" />
						{:else}
							<Heart class="h-4 w-4 fill-current text-[#9e9ea7]" />
							<p class="text-xs font-medium text-[#3d3d4e]">
								{randomNumber(300, 50)}
							</p>
						{/if}
					</div>
					<div class="flex items-center space-x-[2px]">
						{#if isLoading}
							<Skeleton class="h-5 w-10" />
						{:else}
							<!-- <svg
								class="h-4 w-4 fill-current text-[#9e9ea7]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M..." />
							</svg> -->
							<p class="text-xs font-medium text-[#3d3d4e]">
								{randomNumber(10, 1)}.{randomNumber(9, 1)}k
							</p>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.bg-card-info {
		background: linear-gradient(
			180deg,
			transparent 62%,
			rgba(0, 0, 0, 0.003) 63.94%,
			rgba(0, 0, 0, 0.014) 65.89%,
			rgba(0, 0, 0, 0.033) 67.83%,
			rgba(0, 0, 0, 0.059) 69.78%,
			rgba(0, 0, 0, 0.093) 71.72%,
			rgba(0, 0, 0, 0.133) 73.67%,
			rgba(0, 0, 0, 0.177) 75.61%,
			rgba(0, 0, 0, 0.223) 77.56%,
			rgba(0, 0, 0, 0.267) 79.5%,
			rgba(0, 0, 0, 0.307) 81.44%,
			rgba(0, 0, 0, 0.341) 83.39%,
			rgba(0, 0, 0, 0.367) 85.33%,
			rgba(0, 0, 0, 0.386) 87.28%,
			rgba(0, 0, 0, 0.397) 89.22%,
			rgba(0, 0, 0, 0.4) 91.17%
		);
	}
</style>
