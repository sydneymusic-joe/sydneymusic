<script>
	import Button from '../../lib/components/button.svelte';
	import ButtonSCSS from '../../lib/components/button/button.svelte';
	import './styles.scss';
</script>

<div class="TemporaryButtons">
	<p>Small primary button - Tailwind</p>
	<Button size="sm" prefix="Prefix" variant="primary" />
	<br />
	<p>Small primary button - SCSS</p>
	<ButtonSCSS size="sm" prefix="Prefix" variant="primary" />
	<br />
	<p>Medium secondary button - Tailwind</p>
	<Button size="md" variant="secondary" />
	<br />
	<p>Medium secondary button - SCSS</p>
	<ButtonSCSS size="md" variant="secondary" />
	<br />
	<p>Button with class override - SCSS</p>
	<ButtonSCSS size="md" variant="secondary" class="Button--border" />
</div>
