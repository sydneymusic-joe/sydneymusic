import adapter from '@sveltejs/adapter-static';

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
    },
	}
};

export default config;
