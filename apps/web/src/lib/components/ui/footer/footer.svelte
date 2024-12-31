<script>
    const footerLinks = [
      { href: '/', key: 'For designers', text: 'For designers' },
      { href: '/', key: 'Hire talent', text: 'Hire talent' },
      { href: '/', key: 'Inspiration', text: 'Inspiration' },
      { href: '/', key: 'Advertising', text: 'Advertising' },
      { href: '/', key: 'Blog', text: 'Blog' },
      { href: '/', key: 'About', text: 'About' },
      { href: '/', key: 'Careers', text: 'Careers' },
      { href: '/', key: 'Support', text: 'Support' },
    ];
  </script>
  
  <footer class="max-w-[1200px] mx-auto box-content px-8">
    <div class="flex flex-col lg:flex-row justify-between items-center pt-[72px] pb-11 gap-5 lg:gap-0">
      <a href="/">
        <img
          src="logo.svg"
          alt="logo"
          class="w-[104px] h-[30px]"
          width="104"
          height="30"
        />
      </a>
      <ul class="flex flex-wrap justify-center text-sm font-semibold gap-x-3 gap-y-4 xl:gap-8">
        {#each footerLinks as link}
          <li>
            <a href={link.href} class="flex items-center hover:opacity-80">{link.text}</a>
          </li>
        {/each}
      </ul>
      <div class="grid grid-flow-col gap-4">
        <a href="/">
          <img src="/twitter.svg" alt="twitter logo" width="18" height="18" />
        </a>
        <a href="/">
          <img src="/facebook.svg" alt="facebook logo" width="18" height="18" />
        </a>
        <a href="/">
          <img src="/instagram.svg" alt="instagram logo" width="18" height="18" />
        </a>
        <a href="/">
          <img src="/pinterest.svg" alt="pinterest logo" width="18" height="18" />
        </a>
      </div>
    </div>
    <div class="flex flex-col md:flex-row py-11 items-center justify-between text-sm leading-5 text-muted-foreground gap-y-4">
      <ul class="flex flex-wrap justify-center text-sm gap-x-4 gap-y-1 xl:gap-8">
        <li>
          &copy; {new Date().getFullYear()} Bribbble. Created by{' '}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium hover:underline underline-offset-4"
          >
            Salimi
          </a>
          .
        </li>
      </ul>
      <ul class="flex flex-wrap justify-center text-sm gap-x-4 gap-y-1 xl:gap-8">
        <li><a href="/">Jobs</a></li>
        <li><a href="/">Designer</a></li>
        <li><a href="/">Freelancers</a></li>
        <li><a href="/">Tags</a></li>
        <li><a href="/">Places</a></li>
        <li><a href="/">Resources</a></li>
      </ul>
    </div>
  </footer>
  