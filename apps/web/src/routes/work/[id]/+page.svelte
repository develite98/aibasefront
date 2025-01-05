<script>
	import Navbar from "$lib/components/navbar.svelte";
	import Footer from "$lib/components/ui/footer/footer.svelte";

</script>

<Navbar></Navbar>
<div class="container relative mx-auto w-full pb-[70px]">
	<div class="flex justify-center">
		<h1
			class="mb-[10px] w-full max-w-5xl px-4 pt-8 text-start text-2xl font-semibold lg:px-0 lg:pt-16"
		>
			l.
		</h1>
	</div>
	<div class="sticky top-0 z-10 flex justify-center">
		<div
			class="flex w-full max-w-5xl items-center justify-between bg-white px-4 pb-[10px] pt-[14px] lg:px-0"
		>
			<div class="flex items-center gap-3">
				<a href="/praveen2@gmail.com"
					><span class="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full md:h-12 md:w-12"
						><img
							class="aspect-square h-full w-full"
							alt="avatar"
							src="/img1.webp"
						/></span
					></a
				>
				<div class="flex flex-col gap-1">
					<a class="text-xs font-semibold md:text-sm" href="/praveen2@gmail.com"
						><p>Bharat Kumar</p></a
					>
					<div class="flex items-center gap-[10px]">
						<div class="flex items-center">
							<span class="relative mr-1 flex h-3 w-3 items-center justify-center"
								><span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"
								></span><span class="relative inline-flex h-2 w-2 rounded-full bg-green-600"
								></span></span
							>
							<p class="text-xs font-medium text-green-600">Available for work</p>
						</div>
						<p
							class="text-muted-foreground hidden text-xs font-medium hover:cursor-pointer hover:font-semibold lg:block"
						>
							Follow
						</p>
					</div>
				</div>
			</div>
			<div class="flex items-center gap-3">
				<button
					class="focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full border bg-transparent text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:h-10 md:w-10"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-heart"
						><path
							d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
						></path></svg
					></button
				><button
					class="focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full border bg-transparent text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:h-10 md:w-10"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-bookmark"
						><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg
					></button
				><button
					class="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full px-2 py-1 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 max-md:w-8 md:h-10 md:px-4 md:py-2"
					><p class="hidden md:block">Get in touch</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-mail h-4 w-4 md:hidden"
						><rect width="20" height="16" x="2" y="4" rx="2"></rect><path
							d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
						></path></svg
					></button
				>
			</div>
		</div>
	</div>
	<div class="flex justify-center md:px-4 lg:px-[120px]">
		<div class="flex w-full max-w-6xl flex-col items-center">
			<div class="relative flex w-full max-w-5xl flex-col">
				<img
					alt="l."
					fetchpriority="high"
					width="1024"
					height="768"
					decoding="async"
					data-nimg="1"
					class="my-7 contrast-[0.95] md:rounded-md"
					src="/img1.webp"
					style="color: transparent;"
				/>
				<p class="my-8 px-4 text-justify text-lg font-medium md:px-0">knlk</p>
				<div class="flex h-5 justify-start gap-2 px-4 md:px-0">
					<div class="inline-flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-github h-5 w-5"
							><path
								d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
							></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg
						><a
							target="_blank"
							rel="noreferrer"
							class="text-sm font-medium underline-offset-4 hover:underline"
							href="https://github.com/salimi-my/shadcn-ui-sidebar">GitHub repo</a
						>
					</div>
					<div
						data-orientation="vertical"
						role="none"
						class="bg-border mx-2 h-full w-[2px] shrink-0"
					></div>
					<div class="inline-flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-globe h-5 w-5"
							><circle cx="12" cy="12" r="10"></circle><path
								d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
							></path><path d="M2 12h20"></path></svg
						><a
							target="_blank"
							rel="noreferrer"
							class="text-sm font-medium underline-offset-4 hover:underline"
							href="https://github.com/salimi-my/shadcn-ui-sidebar">Live site</a
						>
					</div>
				</div>
			</div>
			<div class="mt-20 flex justify-center"></div>
			<div class="mt-[70px] flex w-full items-center px-4 md:px-0">
				<span class="w-full border bg-[#e7e7e9]"></span>
				<div class="px-6">
					<a href="/praveen2@gmail.com"
						><span
							class="relative flex h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full hover:cursor-pointer"
							><img
								class="aspect-square h-full w-full"
								alt="avatar"
								src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yaktyV1NEampZWVYwNDdzTGN0blRSZzZkWEEifQ"
							/></span
						></a
					>
				</div>
				<span class="w-full border bg-[#e7e7e9]"></span>
			</div>
			<div class="mt-5 flex justify-center px-4 md:px-0">
				<div class="flex flex-col text-center">
					<a href="/praveen2@gmail.com"><p class="text-xl font-medium">Bharat Kumar</p></a>
					<p class="text-muted-foreground mt-2 text-sm">my is correct</p>
					<div class="mt-4">
						<button
							class="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-mail mr-1.5 h-4 w-4"
								><rect width="20" height="16" x="2" y="4" rx="2"></rect><path
									d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
								></path></svg
							>Get in touch</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		data-orientation="horizontal"
		role="none"
		class="bg-border my-20 h-[2px] w-full shrink-0"
	></div>
	<div class="flex w-full flex-col items-center md:px-4 lg:px-[120px]">
		<div class="w-full max-w-6xl px-4 md:px-0">
			<h5 class="font-bold">You might also like</h5>
			<div class="flex w-full justify-center">
				<div class="grid w-full gap-9 pt-4 md:grid-cols-2 xl:grid-cols-3">
					<div class="flex flex-col gap-2">
						<a
							class="group relative h-[260px] w-full overflow-hidden lg:h-[225px] xl:h-[260px]"
							href="/work/65afbcd088ee2ac67d86f6ec"
							><img
								alt="messi"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								class="rounded-lg object-cover contrast-[0.95]"
								sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1439px) 33vw, 25vw"
                                src="/img1.webp"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>
							<div
								class="bg-card-info absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end rounded-lg p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:cursor-pointer group-hover:opacity-100"
							>
								<div class="flex w-full items-center justify-between">
									<div class="w-1/2 truncate font-medium text-white">messi</div>
									<div class="flex justify-end">
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-bookmark"
												><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg
											>
										</div>
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-heart"
												><path
													d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
												></path></svg
											>
										</div>
									</div>
								</div>
							</div></a
						>
						<div class="flex items-center justify-between">
							<a class="flex w-full items-center justify-start space-x-2" href="/bosi5maji"
								><span class="relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full"
									><img
										class="aspect-square h-full w-full"
										alt="avatar"
										src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yWXplRkxPcnEwQkZCa1NxckJnYjlZcVdJbEgiLCJyaWQiOiJ1c2VyXzJiTUN6OWZOSFc0VVhEMDRSc2JxbWdOV25TNCJ9"
									/></span
								>
								<p class="w-1/2 truncate text-sm font-medium"></p></a
							>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<a
							class="group relative h-[260px] w-full overflow-hidden lg:h-[225px] xl:h-[260px]"
							href="/work/65817087339a3363aead0ae5"
							><img
								alt="Technology and Art"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								class="rounded-lg object-cover contrast-[0.95]"
								sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1439px) 33vw, 25vw"
                                src="/img1.webp"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>
							<div
								class="bg-card-info absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end rounded-lg p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:cursor-pointer group-hover:opacity-100"
							>
								<div class="flex w-full items-center justify-between">
									<div class="w-1/2 truncate font-medium text-white">Technology and Art</div>
									<div class="flex justify-end">
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-bookmark"
												><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg
											>
										</div>
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-heart"
												><path
													d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
												></path></svg
											>
										</div>
									</div>
								</div>
							</div></a
						>
						<div class="flex items-center justify-between">
							<a class="flex w-full items-center justify-start space-x-2" href="/salimi"
								><span class="relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full"
									><img
										class="aspect-square h-full w-full"
										alt="avatar"
										src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWlhGNDB5Nk9ORFhRUlhTNHhhbmdyc0tXZjQifQ"
									/></span
								>
								<p class="w-1/2 truncate text-sm font-medium">Mohamad Salimi</p></a
							>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<a
							class="group relative h-[260px] w-full overflow-hidden lg:h-[225px] xl:h-[260px]"
							href="/work/664f5df42b61212ab83d96ce"
							><img
								alt="test post"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								class="rounded-lg object-cover contrast-[0.95]"
								sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1439px) 33vw, 25vw"
                                src="/img1.webp"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>
							<div
								class="bg-card-info absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end rounded-lg p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:cursor-pointer group-hover:opacity-100"
							>
								<div class="flex w-full items-center justify-between">
									<div class="w-1/2 truncate font-medium text-white">test post</div>
									<div class="flex justify-end">
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-bookmark"
												><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg
											>
										</div>
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-heart"
												><path
													d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
												></path></svg
											>
										</div>
									</div>
								</div>
							</div></a
						>
						<div class="flex items-center justify-between">
							<a class="flex w-full items-center justify-start space-x-2" href="/dtt"
								><span class="relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full"
									><img
										class="aspect-square h-full w-full"
										alt="avatar"
										src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yWXplRkxPcnEwQkZCa1NxckJnYjlZcVdJbEgiLCJyaWQiOiJ1c2VyXzJnc0REQjNCd2JUNUxTMzRDRW1ab2FHazE0QSJ9"
									/></span
								>
								<p class="w-1/2 truncate text-sm font-medium"></p></a
							>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<a
							class="group relative h-[260px] w-full overflow-hidden lg:h-[225px] xl:h-[260px]"
							href="/work/658170a7339a3363aead0ae6"
							><img
								alt="We Design Modern"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								class="rounded-lg object-cover contrast-[0.95]"
								sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1439px) 33vw, 25vw"
                                src="/img1.webp"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>
							<div
								class="bg-card-info absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end rounded-lg p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:cursor-pointer group-hover:opacity-100"
							>
								<div class="flex w-full items-center justify-between">
									<div class="w-1/2 truncate font-medium text-white">We Design Modern</div>
									<div class="flex justify-end">
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-bookmark"
												><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg
											>
										</div>
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-heart"
												><path
													d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
												></path></svg
											>
										</div>
									</div>
								</div>
							</div></a
						>
						<div class="flex items-center justify-between">
							<a class="flex w-full items-center justify-start space-x-2" href="/salimi"
								><span class="relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full"
									><img
										class="aspect-square h-full w-full"
										alt="avatar"
										src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWlhGNDB5Nk9ORFhRUlhTNHhhbmdyc0tXZjQifQ"
									/></span
								>
								<p class="w-1/2 truncate text-sm font-medium">Mohamad Salimi</p></a
							>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<a
							class="group relative h-[260px] w-full overflow-hidden lg:h-[225px] xl:h-[260px]"
							href="/work/658170c6339a3363aead0ae7"
							><img
								alt="Web Design Digital"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								class="rounded-lg object-cover contrast-[0.95]"
								sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1439px) 33vw, 25vw"
                                src="/img1.webp"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>
							<div
								class="bg-card-info absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end rounded-lg p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:cursor-pointer group-hover:opacity-100"
							>
								<div class="flex w-full items-center justify-between">
									<div class="w-1/2 truncate font-medium text-white">Web Design Digital</div>
									<div class="flex justify-end">
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-bookmark"
												><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg
											>
										</div>
										<div
											class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-heart"
												><path
													d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
												></path></svg
											>
										</div>
									</div>
								</div>
							</div></a
						>
						<div class="flex items-center justify-between">
							<a class="flex w-full items-center justify-start space-x-2" href="/salimi"
								><span class="relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full"
									><img
										class="aspect-square h-full w-full"
										alt="avatar"
										src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWlhGNDB5Nk9ORFhRUlhTNHhhbmdyc0tXZjQifQ"
									/></span
								>
								<p class="w-1/2 truncate text-sm font-medium">Mohamad Salimi</p></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<Footer></Footer>
