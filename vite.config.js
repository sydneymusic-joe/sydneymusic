import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		target: 'esnext'
	},
	plugins: [
		sveltekit({
			preprocess: vitePreprocess({
				style: true,
				script: false
			})
		})
	]
});
