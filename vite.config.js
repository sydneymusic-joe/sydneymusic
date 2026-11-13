import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
	build: { target: 'esnext' },
	plugins: [
		tailwind(),
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter()
		})
	]
});
