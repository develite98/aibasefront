<script lang="ts">
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import SidebarNav from "./(components)/sidebar-nav.svelte";


	const sidebarNavItems = [
		{
			title: "Profile",
			href: "/examples/forms",
		},
		{
			title: "Account",
			href: "/examples/forms/account",
		},
		{
			title: "Appearance",
			href: "/examples/forms/appearance",
		},
		{
			title: "Notifications",
			href: "/examples/forms/notifications",
		},
		{
			title: "Display",
			href: "/examples/forms/display",
		},
	];
</script>

<div class="hidden space-y-6 p-10 pb-16 md:block">
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 container">
		<div>
			<h2 class="text-2xl font-bold tracking-tight">Edit profile</h2>
			<p class="text-muted-foreground">
				Manage your account settings and set e-mail preferences.
			</p>
		</div>
	
	</div>
	<Separator class="my-6" />
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0  container">
		<aside class="-mx-4 lg:w-1/5">
			<SidebarNav items={sidebarNavItems} />
		</aside>
		<div class="flex-1 lg:max-w-2xl">
			<slot />
		</div>
	</div>
</div>
