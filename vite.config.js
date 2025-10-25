import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build:{
		target:'esnext'
	},
	plugins: [sveltekit()]
});
