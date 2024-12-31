<script>
	import { ChevronDown, ListFilter } from 'lucide-svelte';
	import { Button } from './ui/button';
	import { Separator } from './ui/separator';
</script>

<div class="flex w-full flex-col lg:hidden">
	<div class="flex items-center justify-between">
		<Button
			variant="outline"
			class="mr-10 rounded-[8px] p-[18px] pr-3 shadow-none hover:bg-transparent hover:shadow-sm"
		>
			Following
			<ChevronDown class="ml-2" size={14} />
		</Button>

		<Button
			variant="outline"
			class="ml-10 rounded-full p-[18px] shadow-none hover:bg-transparent hover:shadow-sm"
		>
			<ListFilter class="mr-1" size={16} />
			Filters
		</Button>
	</div>
	<Separator class="my-4" />
</div>

<div class="hidden w-full lg:block">
	<div class="flex flex-row items-center justify-between">
		<Button
			variant="outline"
			class="mr-10 rounded-[8px] p-[18px] pr-3 shadow-none hover:bg-transparent hover:shadow-sm"
		>
			Following
			<ChevronDown class="ml-2" size={14} />
		</Button>

		<div class="relative overflow-x-auto overflow-y-hidden">
			<!-- <span
				class="absolute left-0 z-10 hidden h-9 w-10 items-center justify-start bg-gradient-to-l from-transparent from-0% to-white to-50% hover:cursor-pointer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg
				></span
			><span
				class="absolute right-0 z-10 flex h-9 w-10 items-center justify-end bg-gradient-to-r from-transparent from-0% to-white to-50% hover:cursor-pointer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg
				></span
			> -->
			<ul
				class="scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap px-[2px]"
			>
				<li>
					<button
						type="button"
						class="inline-flex h-9 items-center rounded-full bg-[#f8f7f4] px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
						>Web Design</button
					>
				</li>
				<li>
					<button
						type="button"
						class="-ml-4 inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
						>Discover</button
					>
				</li>
				<li>
					<button
						type="button"
						class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
						>Animation</button
					>
				</li>
				<li>
					<button
						type="button"
						class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
						>Branding</button
					>
				</li>
				<li>
					<button
						type="button"
						class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
						>Illustration</button
					>
				</li>
				<li>
					<button
						type="button"
						class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70"
						>Typography</button
					>
				</li>
			</ul>
		</div>

		<Button
			variant="outline"
			class="hover:bg
        -transparent ml-10 rounded-full p-[18px] shadow-none hover:shadow-sm"
		>
			<ListFilter class="mr-1" size={16} />
			Filters
		</Button>
	</div>
</div>
