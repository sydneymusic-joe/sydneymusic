<script>
	export let label = 'Button';
	export let href = '#';
	export let variant = 'primary';
</script>

<a
	{href}
	target="_blank"
	class="font-instrumentSans px-3 md:px-6 py-2 rounded-md transition-all duration-500 ease-in-out uppercase flex items-center justify-center
		{variant === 'primary'
		? 'bg-white text-[#212121] hover:bg-[#ebebeb]'
		: 'border text-white hover:bg-[#ffffff14]'}"
>
	{label} &raquo;
</a>
