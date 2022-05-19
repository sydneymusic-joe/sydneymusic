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
		{#if performers.length}<p class="uppercase text-sm">W/ {performers.join(", ")}</p>{/if}
		{#if venue}<p class="uppercase text-sm">{venue}</p>{/if}
	</div>
	<div class="flex items-center space-x-5">
    {#if website}
		<a href="{website}"class="flex items-center space-x-1 text-sm">
      <svg class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="9" fill="currentColor" />
			</svg>
			<p>Visit website</p>
		</a>
    {/if}
    {#if calendarLink }
		<a href="{calendarLink}" class="flex items-center space-x-1 text-sm">
      <svg class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="9" fill="currentColor" />
			</svg>
			<p>Add to calendar</p>
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
