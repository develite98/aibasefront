<script lang="ts">
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import type { PageData } from "./$types.js";
	import DisplayForm from "./display-form.svelte";
	export let data: PageData;
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Display</h3>
		<p class="text-muted-foreground text-sm">
			Turn items on or off to control what's displayed in the app.
		</p>
	</div>
	<Separator />
	<DisplayForm data={data.form} />
</div>
