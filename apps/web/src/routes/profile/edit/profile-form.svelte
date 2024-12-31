<script lang="ts" context="module">
	import { z } from "zod";
	export const profileFormSchema = z.object({
		username: z
			.string()
			.min(2, "Username must be at least 2 characters.")
			.max(30, "Username must not be longer than 30 characters"),
		email: z.string({ required_error: "Please select an email to display" }).email(),
		bio: z.string().min(4).max(160).default("I own a computer."),
		urls: z
			.array(z.string().url())
	});
	export type ProfileFormSchema = typeof profileFormSchema;
</script>

<script lang="ts">
	import { type Infer, type SuperValidated, superForm } from "sveltekit-superforms";
	import SuperDebug from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { tick } from "svelte";

	import { cn } from "$lib/utils.js";
	import { browser } from "$app/environment";
	import { Button, Control, Description, ElementField, Field, FieldErrors, Fieldset, Label, Legend } from "$lib/components/ui/form";
	import { Input } from "$lib/components/ui/input";
	import { Select } from "bits-ui";

	export let data: SuperValidated<Infer<ProfileFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(profileFormSchema),
	});

	const { form: formData, enhance } = form;

	function addUrl() {
		$formData.urls = [...$formData.urls, ""];

		tick().then(() => {
			const urlInputs = Array.from(
				document.querySelectorAll<HTMLElement>("#profile-form input[name='urls']")
			);
			const lastInput = urlInputs[urlInputs.length - 1];
			lastInput && lastInput.focus();
		});
	}

	$: selectedEmail = {
		label: $formData.email,
		value: $formData.email,
	};
</script>

<form method="POST" class="space-y-8" use:enhance id="profile-form">
	<Field {form} name="username">
		<Control let:attrs>
			<Label>Username</Label>
			<Input placeholder="Join" {...attrs} bind:value={$formData.username} />
		</Control>
		<Description>
			This is your public display name. It can be your real name or a pseudonym. You can only
			change this once every 30 days.
		</Description>
		<FieldErrors />
	</Field>

	<Field {form} name="email">
		<Control let:attrs>
			<Label>Email</Label>
			<Select.Root
				selected={selectedEmail}
				onSelectedChange={(s) => {
					s && ($formData.email = s.value);
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select a verified email to display" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="m@example.com" label="m@example.com" />
					<Select.Item value="m@google.com" label="m@google.com" />
					<Select.Item value="m@support.com" label="m@supporte.com" />
				</Select.Content>
			</Select.Root>
			<input hidden name={attrs.name} bind:value={$formData.email} />
		</Control>
		<Description>
			You can manage verified email addresses in your <a href="/examples/forms"
				>email settings</a
			>.
		</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="bio">
		<Control let:attrs>
			<Label>Bio</Label>
			<!-- <Textarea {...attrs} bind:value={$formData.bio} /> -->
		</Control>
		<Description>
			You can <span>@mention</span> other users and organizations to link to them.
		</Description>
		<FieldErrors />
	</Field>
	<div>
		<Fieldset {form} name="urls">
			<Legend>URLs</Legend>
			{#each $formData.urls as _, i}
				<ElementField {form} name="urls[{i}]">
					<Description class={cn(i !== 0 && "sr-only")}>
						Add links to your website, blog, or social media profiles.
					</Description>
					<Control let:attrs>
						<Input {...attrs} bind:value={$formData.urls[i]} />
					</Control>
					<FieldErrors />
				</ElementField>
			{/each}
		</Fieldset>
		<Button type="button" variant="outline" size="sm" class="mt-2" on:click={addUrl}>
			Add URL
		</Button>
	</div>

	<Button>Update profile</Button>
</form>

<!-- {#if browser}
	<SuperDebug data={$formData} />
{/if} -->
