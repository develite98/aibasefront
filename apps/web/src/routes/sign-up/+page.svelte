<script>
	import UserAuthForm from "$lib/components/user-auth-form.svelte";
	import UserCreateForm from "$lib/components/user-create-form.svelte";

</script>
<div class='flex items-stretch page overflow-hidden'>
    <section class="relative hidden left-container h-full grow-0 text-white lg:flex">
        <div class="flex h-full flex-col justify-between">
            <video playsInline class="h-full w-full object-cover" autoPlay loop muted src="sign-up.mp4" />
        </div>
    </section>
    <section class="flex w-full flex-1 flex-col justify-center overflow-auto">
        <main class="flex h-full w-full grow items-center justify-center xl:justify-start">
            <div class="xl:ml-28 w-[380px]">
                <div class="flex flex-col space-y-2 text-center mb-8">
                    <h1 class="text-2xl font-semibold tracking-tight">Sign-up</h1>
                    <p class="text-muted-foreground text-sm">
                        Enter your email below
                    </p>
                </div>
                <UserCreateForm></UserCreateForm>
            </div>
        </main>
    </section>
</div>

<style>
    .page {
        height: 100vh;
    }

    .left-container {
        width: 400px;
    }
</style>
