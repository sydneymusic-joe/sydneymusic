<script context="module">
	import API from '$lib/contentful/';
	import { previewMode, groupBy, createCalendarLink, formatDayOfWeek, formatDateLong } from '$lib/globals.mjs';

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
        order: [gigStartDate_ASC sys_firstPublishedAt_ASC], 
        limit: 50,
        where: { 
          gigStartDate_gte: "${n.toISOString()}"
          gigStartDate_lte: "${d.toISOString()}"
        },
        preview:${previewMode}
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
      articlesCollection(order: sys_firstPublishedAt_DESC, limit: 4, preview:${previewMode}) {
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
  srcset="/canman-homehero@2x.png 2048w, /canman-homehero@1x.png 1024w" 
  alt="SydneyMusic.net mascot Can Man welcoming you to the website" 
  class="aspect-3/1 md:w-full lg:max-w-5xl mb-10 m-auto" />

<div class="max-w-5xl px-5 mx-auto space-y-20 pb-24">
	<!-- First section -->
	<div class="space-y-10">

		<div class="grid md:grid-cols-2 gap-5 gap-y-20">
			<!-- left col -->
			<div class="space-y-10">
        <h1 class="notch-left text-xl">Sydney live music this week</h1>

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
				<h1 class="notch-left text-xl">Latest Reads</h1>
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
    <div class="grid md:grid-cols-2 gap-5">
      <!-- left col -->
      <div class="space-y-6 mb-20 md:mb-0">
        <h2 class="notch-left text-xl">Welcome to SydneyMusic!</h2>
        <div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-4 px-3">
          <p class="font-bold">This site exists to promote the community that music creates, with a local focus on Sydney, Australia.</p>
          <p>At its heart is a simple, no-nonsense gig guide that does exactly what it says on the tin. We’ll also be publishing the occasional bit of writing, including commentary on cultural trends, music reviews, opinion pieces, and round-ups from contributing writers. We also have a Discord, to help foster connections, again in the hope that it will make it easier to find Sydney’s music community and find your place in it.</p>
          <Button label="Read more" href="/about" />    
        </div>
      </div>

      <div class="space-y-6">
        <h2 class="notch-left text-xl">Join our Discord!</h2>

        <div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-4 px-3">
          <p><strong>We have a Discord</strong> (online chat server), so we can have a more dynamic and discussion-oriented place for Sydney's music community to meet. It's about as Web 2.0 as it gets around here.</p>
          <img src="/discord-logo-wordmark-black.svg" alt="Discord logo" height="80" width="292" />
          <Button label="Join our Discord!" href="https://discord.gg/jv8VKrXymJ" />
        </div>  
      </div>
    </div>
	</div>

</div>
