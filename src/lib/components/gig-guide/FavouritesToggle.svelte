<script>
	const { value, onchange } = $props();
</script>

<label for="toggle-selected" class="relative flex cursor-pointer items-center">
	<input type="checkbox" id="toggle-selected" class="sr-only" checked={value} {onchange} />
	My favourites
</label>
