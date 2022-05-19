import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    // browser: {
    //   hydrate: false,
    //   router: false
    // },
    // prerender: {
    //   concurrency: 5,
    //   crawl: true,
    //   default: true,
    //   enabled: true,
    //   entries: ['*'],
    //   onError: 'fail'
    // },
	}
};

export default config;
