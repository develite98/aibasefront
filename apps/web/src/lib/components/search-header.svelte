<script lang="ts">
	import { Search } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { Input } from './ui/input';
	import { browser } from '$app/environment';

	export let search;

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
	<section class="relative flex flex-col items-center">
		<div class="h-20 w-full bg-gradient-to-r from-[#e6fbfe] to-[#edddfb]" />
		<form
			on:submit|preventDefault={handleSearch}
			class="flex w-full justify-center px-4 text-center"
		>
			<div
				class="shadow flex h-16 w-full max-w-[628px] -translate-y-1/2 items-center justify-between rounded-lg bg-white focus-within:outline-none"
			>
				<Search strokeWidth={2.5} class="ml-7 mr-4 h-5 w-5 text-[#9e9ea7]" />
				<Input
					placeholder="Search..."
					bind:value={searchVal}
					class="h-8 border-none pl-0 text-base shadow-none placeholder:text-[#9e9ea7] focus-visible:ring-0"
				/>
			</div>
		</form>
		{#if search !== ''}
			<h1 class="mb-3 text-center text-3xl font-bold">
				{search.charAt(0).toUpperCase() + search.slice(1)}
			</h1>
			<p class="mb-3 text-center text-[#6e6d7a]">Browse {search} designs</p>
		{/if}
	</section>
{/if}
