import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			concurrency: 5,
			crawl: true,
			default: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},
		browser: {
			hydrate: false,
			router: false
		}
	},
	preprocess: vitePreprocess()
};
export default config;
