import { minify } from 'html-minifier';
import { prerendering } from '$app/env';
 
const minification_options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true
};
 

export async function handle({ event, resolve }) {
  const response = await resolve(event);
 
  if (prerendering && response.headers.get('content-type') === 'text/html') {
    return new Response(minify(await response.text(), minification_options), {
      status: response.status,
      headers: response.headers
    });
  }
 
  return response;
}