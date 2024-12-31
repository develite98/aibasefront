<script>
	import { Button } from "./ui/button";
    import { default as SearchInput } from "./search-input.svelte";
	import { ChevronDownIcon } from "lucide-svelte";


    const NavLinks = [
      { href: '/', key: 'Find talent', text: 'Find talent' },
      { href: '/', key: 'Inspiration', text: 'Inspiration' },
      { href: '/', key: 'Learn design', text: 'Learn design' },
      { href: '/', key: 'Jobs', text: 'Jobs' },
      { href: '/', key: 'Go Pro', text: 'Go Pro' }
    ];

  </script>
  
  <nav class="flex justify-between items-center mid-xl:grid mid-xl:grid-cols-[1fr_96px_1fr] h-[100px] border-nav-border px-6 lg:px-10">
    <div class="flex-1 flex justify-start items-center gap-1 xl:gap-10">
      <!-- <Button size="icon" variant="link" class="flex lg:hidden">
       123
      </Button> -->
      <a href="/" class="mid-xl:hidden mr-8">
        <img src="/logo.svg" alt="logo" class="w-24 h-[38px]" width="96" height="38" />
      </a>
      <ul class="hidden lg:flex text-sm font-semibold gap-8">
        {#each NavLinks as link}
          <li>
            <a href={link.href} class="flex items-center hover:opacity-80">
              {link.text} {#if link.text === 'Learn design'}
                <ChevronDownIcon class="ml-1" />
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  
    <!-- <a href="/" class="max-mid-xl:hidden">
      <img src="/logo.svg" alt="logo" class="w-24 h-[38px]" width="96" height="38" />
    </a>
   -->
    <div class="flex justify-end items-center">
      <!-- {#if userId}
        <div class="flex justify-end items-center gap-6">
          <SearchInput />
          <Button
            variant="outline"
            class="hidden xl:flex h-12 rounded-full hover:bg-transparent shadow-none border-[#e7e7e9] hover:border-[#dbdbde] font-semibold px-6"
            as="a"
            href="/upload-new"
          >
            Share work
          </Button>
          <ProfileMenu />
        </div>
      {:else} -->
        <div class="flex justify-end items-center gap-6">
          <SearchInput />
          <a
            href="/sign-in"
            class="hidden lg:flex font-semibold text-sm hover:opacity-80"
          >
            Log in
          </a>
          <Button
            class="rounded-full h-12 px-6 font-semibold hover:opacity-80"
            href="/sign-up"
          >
            Sign up
          </Button>
        </div>
      <!-- {/if} -->
    </div>
  </nav>
  