<script>
	const { selectedCount, onShare, onClear } = $props();
</script>

<div id="shareprompt">
	<button class="share plausible-event-name=Share+Prompt+Click" onclick={onShare}>
		Share my selections
		<span>{selectedCount}</span>
	</button>
	<button class="clear plausible-event-name=Share+Clear+All" onclick={onClear}>Clear all</button>
</div>

<style>
	@reference "tailwindcss";
	div {
		@apply flex flex-row justify-center gap-x-2 p-5;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(5px);
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 101;
	}

	button {
		background: #fffbeb;
		color: black;
		border: black solid 1px;
		box-shadow: 3px 3px 0px rgb(0, 0, 0);
		@apply px-3 py-2 text-sm uppercase;
	}

	span {
		background: black;
		color: white;
		border-radius: 10px;
		padding: 2px 5px;
		margin-left: 6px;
	}
</style>
