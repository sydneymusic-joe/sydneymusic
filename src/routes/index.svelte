<script context="module">
	import API from '$lib/contentful/';
	import { groupBy, createCalendarLink, formatDayOfWeek, formatDateLong } from '$lib/globals.mjs';

	const getGigs = async () => {
		// ToDo: We're doing this in the or server's local timezone.
		// Is this okay? (I think it's okay, but I'm not sure)
		const n = new Date();
		n.setHours(0, 0, 0, 0); // Start of Day
		const d = new Date();
		d.setDate(d.getDate() + 6); // 1 week
		d.setHours(23, 59, 59, 999); // End of day
		const data = await API(`{
      eventsCollection(
        order: [sys_firstPublishedAt_ASC], 
        limit: 50,
        where: { 
          gigStartDate_gte: "${n.toISOString()}"
          gigStartDate_lte: "${d.toISOString()}"
        }
      ) {
        items {
          gigStartDate
          promotedName
          ticketUrl
          performersList
          furtherInfo
          furtherInfoContributorInitials
          venue {
            venueName
            address
            suburb
            url
          }
        }
      }
    }`);

		if (data) {
			let event = data.eventsCollection.items
      .map((i) => {
				let { gigStartDate, ...rest } = i;
        let d = new Date(gigStartDate);
				return {
					date: d,
          time:(d.getHours() % 12) + ":" + d.getMinutes().toString().padStart(2, "0") + (d.getHours() >= 12 ? "pm" : "am"),
					// Collapse performers into an array of names
					...rest
				};
			})
			
      let byDay = groupBy(
				event,
				({ date }) => `${formatDayOfWeek(date)}:${formatDateLong(date)}`
			)
      
			return byDay;
		}
		return {};
	};

	const getReads = async () => {
		const data = await API(`query {
      articlesCollection(order: sys_firstPublishedAt_DESC, limit: 4) {
          items {
            headline
            excerpt
            slug,
            sys {
              firstPublishedAt
            }
          }
        }
      }`);

		if (data) {
			return data.articlesCollection.items;
		}
		return {};
	};

	export async function load() {
		let reads = await getReads();
		let gigs = await getGigs();

		return {
			props: {
        title : 'Welcome',
				reads,
				gigs
			}
		};
	}
</script>

<script>
	import Event from '$lib/components/event.svelte';
	import Read from '$lib/components/read.svelte';
	import Button from '../lib/components/button.svelte';

  import SeoSocial from '$lib/components/seo-social.svelte';

  export let gigs;
  export let reads;
</script>

<SeoSocial />
<img 
  src="/canman-homehero.png" 
  alt="SydneyMusic.net mascot Can Man welcoming you to the website" 
  class="aspect-3/1 md:w-full lg:max-w-5xl mb-10 m-auto" />

<div class="max-w-5xl px-5 mx-auto space-y-20 pb-24">
	<!-- First section -->
	<div class="space-y-10">

		<div class="grid lg:grid-cols-2 gap-5 gap-y-20">
			<!-- left col -->
			<div class="space-y-10">
        <h2 class="notch-left text-xl">Gigs at a glance</h2>

        <div class="space-y-10 sm:pr-20 lg:pr-28">
          {#each gigs as { label, items }, i}
          <!-- Only get the next 2 days -->
          {#if i < 2}
            <div class="space-y-0">
              <h3 class="notch-left text-lg">
                <span class="font-bold text-ruby">{label.split(':')[0]}</span>
                <span class="font-normal text-graphite">{label.split(':')[1]}</span>
              </h3>
              <div class="divide-black divide-y">
                {#each items as event, i}
                  {#if i < 3}
                  <div class="py-4 pl-3">
                    <Event
                      name={event.promotedName}
                      performers={event.performersList}
                      calendarLink={createCalendarLink(event)}
                      venue={event.venue}
                      website={event.ticketUrl}
                      time={event.time}
                      initials={event.furtherInfoContributorInitials}
                    />
                  </div>
                  {/if}
                {/each}
                {#if items.length > 3}
                <a class="text-gray-700 text-sm my-0 py-2 pl-3 block hover:underline" href="/gig-guide">
                + {items.length - 3} more
                </a>
                {/if}
              </div>
            </div>
          {/if}
          {/each}
          <Button label="More Gigs" href="/gig-guide" />
        </div>
			</div>

			<!-- Right col -->
			<div class="space-y-10">
				<h2 class="notch-left text-xl">Latest Reads</h2>
				<div class="space-y-10 sm:pr-20 lg:pr-28">
          {#each reads as { headline, excerpt, slug }}
            <a href="/reads/{slug}" class="block">
              <Read {headline} body={excerpt} />
            </a>
          {/each}
					<Button label="More Reads" href="/reads" />
				</div>
			</div>
		</div>
	</div>

	<!-- Second section -->
	<div class="space-y-10">
    <div class="space-y-10">
      <h2 class="notch-left text-xl">Welcome to SydneyMusic!</h2>

      <div class="grid lg:grid-cols-2 gap-5">
        <!-- left col -->
        <div class="space-y-10">
          <div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-3">
		  <p class="font-bold">This site exists to promote the community that music creates, with a local focus on Sydney, Australia.</p>
            <p>Community online is well served by many platforms and services — you can usually find your people somewhere on the internet. So the main goal of this site is to point you to where the good stuff is happening IRL, so you can find your people and your favourite artists, new or old, all in the same place.</p>
            <p>At its heart is a simple, no-nonsense gig guide that does exactly what it says on the tin. We’ll also be publishing the occasional bit of writing,including commentary on cultural trends, music reviews, opinion pieces, and round-ups from contributing writers. We also have a Discord, to help foster connections, again in the hope that it will make it easier to find Sydney’s music community and find your place in it.</p>
          </div>
        </div>
        <!-- right col -->
        <img src="/canman-about.png" alt="" class="aspect-square w-full hidden lg:block" />
      </div>
    </div>

    <!-- Third section -->
    <div class="grid lg:grid-cols-2 gap-5">
      <!-- left col -->
      <div class="space-y-10">
        <h2 class="notch-left text-xl">How SydneyMusic.net Works</h2>
        <div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-4">
        <p>This site is emphatically not-for-profit.</p>
        <p>Everyone’s gotta eat, but Sydney’s music landscape has been made worse for having to put profit before principles more often than not. It’s reflected in our (lack of) music press, the fact that outsider music is having a harder and harder time finding ears and getting attention, and a general lack of risks being taken — resulting in a music scene that plays it safe and takes fewer risks compared to other global music communities.</p>
        <p>This site will never attempt to disguise promotional consideration within “native content” or “sponsored content”, run retina-scorching banner ads, or promote artists in exchange for cash or favours. We will never collect data that could be considered PII (personally identifiable information) or profile you in any way.</p>
        <p>The site is run by volunteers donating their skills and time, and hosting costs are covered by one member of that volunteer team. We’re not currently seeking donations of any kind — just enjoy the site, spread the word, and send us tips on where to find great shows.</p>
        </div>
      </div>
      <!-- right col -->
      <div class="space-y-10">
        <h2 class="notch-left text-xl">Join our Discord!</h2>

        <div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-4">
          <p>
            <strong>We have a Discord</strong> (online chat server), so we can have a more dynamic and discussion-oriented place for Sydney's music community to meet. It's about as Web 2.0 as it gets around here.
          </p>
          <img src="/discord-logo-wordmark-black.svg" alt="Discord logo" />
          <Button label="Join our Discord!" href="https://discord.gg/jv8VKrXymJ" />
        </div>
      </div>
    </div>
	</div>

</div>
