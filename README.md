# SydneyMusic.net

_Lead Developer and Architect:_  
Mike Riethmuller  
https://www.madebymike.com.au

_Additional Code:_  
Joe Hardy  
https://joe.hardy.id.au

## Tech stack info

SydneyMusic.net is a static site that is generated at build time. It has been coded using the following technologies:

* SvelteKit
* TailwindCSS

... and we're deploying to Netlify and using Contentful as our Headless CMS.

## How this repo works

You're welcome to read this code, get inspiration from it, fork it, deploy it or drop a pull request in with some suggestions. We just ask that anything you do be done in the spirit of the community project.

## If you want to deploy your own version of this site for your own subcommunity or a different city

... then please go for it! We are happy to provide what help and support we can but ultimately the code is provided in an "as is" basis and doesn't have any kind of warranty or support commitment attached to it. We're not getting paid for this.

Here are the conditions of use which we request in good faith:

* You make your own version of the site's code available in a similar way
* You don't run ads or pixel tracking technology on the site - the surveillance economy needs to stop
* The rights to the code don't extend to the re-use of the Can Man mascot and associated artwork by Hugh McKinnon. These need to be replaced in your version of the site by the time you send it live.

## Installation instructions

Software pre-requisites that you'll need to have installed on your computer:
* Git / developer tools (hint: bundled with Xcode Command Line Tools on a Mac)
* npm

You will also need to create a free Contentful account at www.contentful.com. You can replace Contentful with any other GraphQL-compatible datastore for your own site, but start with this.

### Initial Setup

First, we're going to get Everything In Its Right Place

1. Download this codebase to your local hard drive, preferably using `git clone`.
2. To install all of the npm dependencies for the first time, open a Terminal session, navigate to the folder you've downloaded the code to and run `npm install`.
3. Import our Contentful content model into your own Contentful account by using the file and instructions provided in the `contentful/` directory in this repo

Congrats, you now have a local development environment and a Headless CMS to store all your data in!

You can verify the content model import worked by navigating around the "Content Model" section in Contentful.

### Environment Configuration

First up, we need to configure your local environment to access your online Contentful data repository

1. Create a file called `.env` in the root directory of your local copy of the codebase and put two lines representing two environment variables in it:

```
VITE_CONTENTFUL_SPACE=
VITE_CONTENTFUL_TOKEN=
```

The values for these two environment variables should be the Contentful Space ID and a Contentful Token Access Token (secret key). You can read up how to get these in the Contentful documentation.

### Testing Your Local Environment

Theoretically you should be ready to run your local copy of the site now!

1. Open a command line / terminal session and run `npm run dev` from your codebase directory
2. If this runs without errors, open a browser and navigate to http://localhost:3000
3. Site should load!

### Deploying to Netlify

You can deploy this site anywhere you want, but the fastest way to do it is using Netlify. Their free tier offers 300 build minutes per month and 100GB of traffic.

You can sign up for an account at https://www.netlify.com and to get the site deploying you just tell Netlify where your git repository is. Read their docs for more information on that.

NB: we'll probably also provide a method to deploy the site to Amazon Web Services later (S3 + Lambda + Cloudfront) - or ideally some other code-first PaaS that doesn't have a billionaire at the helm - but that'll come down the track.

### Setting up a Contentful webhook

The site is deployed as a **static site**. This is important. The site is generated - as in, it downloads all of the content, renders every page, and creates a static site - when you **build** it. That means that the site itself is not dynamic - everything has already been pre-generated. This is good because it means the site is faster in the browser, and usage is relatively anonymised.

As a result, when you add a new "entry" to Contentful, you will need to issue an instruction to Netlify to trigger a build and deploy of the site. This is done via webhooks, and you can read about them at:

https://www.contentful.com/developers/docs/concepts/webhooks/
https://docs.netlify.com/configure-builds/build-hooks/

## Now what?

You should hopefully have a development environment, a production environment to deploy to, and a CMS to write your content.

From here, use these resources to try and facilitate the growth of your community!
