<script>
	import { Search } from 'lucide-svelte';
	import { Input } from './ui/input';
</script>

<form>
	<div
		class="hidden h-12 items-center justify-between rounded-full bg-[#f4f5fb] focus-within:outline-none focus-within:ring-0 xl:flex px-4"
	>
		<Search className="h-5 w-5 ms-5 me-2 text-muted-foreground" />
		<Input placeholder="Search..." class="ms-4 !outline-none h-8 !bg-transparent border-none pl-0 shadow-none" />
	</div>
</form>
<Search className="h-[22px] w-[22px] xl:hidden" />
