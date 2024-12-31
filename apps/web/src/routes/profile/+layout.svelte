<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/ui/footer/footer.svelte';
</script>

<Navbar></Navbar>
<slot />
<Footer></Footer>
