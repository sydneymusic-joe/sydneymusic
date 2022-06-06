<script>
  export let name = "Performer";
  export let venue = null;
  export let website = null;
  export let calendarLink = null;
  export let performers = [];
  export let comment = null;
</script>

<div class="space-y-2">
	<div class="">
		<h4 class="font-bold uppercase italic">{name}</h4>
		{#if performers && performers.length}<p class="uppercase text-sm">W/ {performers.join(", ")}</p>{/if}
		{#if venue}<p class="uppercase text-sm">{venue}</p>{/if}
	</div>
	<div class="flex items-center space-x-5">
    {#if website}
		<a href="{website}" class="flex items-center space-x-1 text-sm group">
      <svg class="w-4 h-4"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 557 559">
        <path class="group-hover:text-ruby" fill="currentColor" d="M278.5 558a278.5 278.5 0 1 0 0-557 278.5 278.5 0 0 0 0 557Z"/>
        <path fill="#fff" d="M233.4 291.3c0-25.3-26.2-15.3-26.2-36.1 0-11.7 13.5-19.4 31.1-21.2 22.1-2.3 62.7-13.1 71.8-13.1 13.5 0 22.6 9 22.6 41.5v130c0 23.9 17.1 16.7 17.1 34.8 0 7.7-8.1 17.6-23.5 17.6h-86.7c-15.3 0-23.5-9.9-23.5-17.6 0-18.1 17.1-10.8 17.1-34.8V291.3h.2Zm-13.1-133.6c0-22.6 21.2-43.3 56.4-43.3s56.4 20.8 56.4 43.3c0 22.5-21.2 43.3-56.4 43.3s-56.4-20.7-56.4-43.3Z"/>
      </svg>
			<p class="group-hover:underline">Visit website</p>
		</a>
    {/if}
    {#if calendarLink }
		<a href="{calendarLink}" class="flex items-center space-x-1 text-sm group">
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 557 559">
          <path class="group-hover:text-ruby"  fill="currentColor" d="M278.5 558a278.5 278.5 0 1 0 0-557 278.5 278.5 0 0 0 0 557Z"/>
          <path fill="#fff" d="M232 134.2h93v98.4h98.4v93H325V424h-93v-98.4h-98.4v-93H232v-98.4Z"/>
        </svg>
			<p class="group-hover:underline" >Add to calendar</p>
		</a>
    {/if}
	</div>
  {#if comment}
  <div class="relative border border-black bg-yellow-50 py-3 pr-5 pl-8">

    <svg class="absolute left-0 top-4 w-12 h-12 transform -translate-x-1/2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" fill="currentColor" />
    </svg>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat vel ipsum in molestie. Mauris congue sapien mauris, ut vestibulum enim rhoncus. Mauris placerat vel ipsum in molestie. Mauris congue sapien mauris, ut vestibulum enim rhoncus.</p>
  </div>
  {/if}
</div>
