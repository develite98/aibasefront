<script lang="ts">
	import { Search } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { Input } from './ui/input';
	import { browser } from '$app/environment';
	import { Button } from './ui/button';

	export let search = '';

	let searchVal = '';
	let category: string | null = null;

	$: {
		if (browser) {
			const url = new URL(window?.location.href);
			category = url.searchParams.get('category');
		}
	}

	const handleSearch = () => {
		if (category === null) {
			goto(`/?search=${searchVal}`);
		} else {
			goto(`/?search=${searchVal}&category=${category}`);
		}
	};
</script>

{#if search !== undefined}
	<section class="relative mb-12 flex flex-col items-center">
		<!-- <div class="h-20 w-full bg-gradient-to-r from-[#e6fbfe] to-[#edddfb]" /> -->
		<h1 class="shots-search-hero__heading mb-6 mt-6 w-[480px] text-center text-5xl font-medium">
			Discover the world’s top designers
		</h1>
		<h2 class="shots-search-hero__subheading mb-6 w-[800px] text-center text-2xl text-[#6e6d7a]">
			Explore work from the most talented and accomplished designers ready to take on your next
			project
		</h2>
		<form
			on:submit|preventDefault={handleSearch}
			class="flex w-full justify-center px-4 text-center"
		>
			<div
				class="flex h-14 w-full max-w-[628px] items-center justify-between rounded-full border border-gray-100 bg-[#f4f5fb] focus-within:outline-none"
			>
				<Input
					placeholder="What are you looking for...?"
					bind:value={searchVal}
					class="ml-4 h-8 border-none bg-transparent pl-0 text-base shadow-none placeholder:text-[#9e9ea7] focus-visible:ring-0"
				/>
				<Button class="ml-4 mr-2 h-10 min-h-10 w-10 min-w-10 rounded-full !p-0"
					><Search strokeWidth={2.5} class="h-5 w-5 text-[#9e9ea7]" /></Button
				>
			</div>
		</form>
		<!-- {#if search === ''}
			<h1 class="mb-3 text-center text-3xl font-bold">
				{search.charAt(0).toUpperCase() + search.slice(1)}
			</h1>
			<p class="mb-3 text-center text-[#6e6d7a]">Browse {search} designs</p>
		{/if} -->
		<div class="mt-4 flex items-center gap-2">
			<span class="opacity-60"> Trending searches: </span>
			<ul
			class="scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap px-[2px]"
		>
			<li>
				<button
					type="button"
					class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
					>Web Design</button
				>
			</li>
			<li>
				<button
					type="button"
					class="-ml-4 inline-flex h-6 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
					>Discover</button
				>
			</li>
			<li>
				<button
					type="button"
					class="inline-flex h-6 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
					>Animation</button
				>
			</li>
			<li>
				<button
					type="button"
					class="inline-flex h-6 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
					>Branding</button
				>
			</li>
		</ul>
		</div>
	</section>
{/if}
