import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			concurrency: 5,
			crawl: true,
			entries: ['*']
		}
	},
	preprocess: vitePreprocess()
};
export default config;
