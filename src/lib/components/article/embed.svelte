<script>
	import { isInlineItem } from 'datocms-structured-text-utils';
	import Event from '../event.svelte';
	import { formatDay, formatDateLong, createCalendarLink } from '../../globals.mjs';

	let { link, node } = $props();
	let d, hours;
	if (link.gigStartDate) {
		d = new Date(link.gigStartDate);
		hours = d.getHours() != 12 ? d.getHours() % 12 : 12;
		link.date = d;
		link.time = 
			hours +
			':' +
			d.getMinutes().toString().padStart(2, '0') +
			(d.getHours() >= 12 ? 'pm' : 'am');
	}
</script>


{#if link.__typename == 'EmbedVideoModelRecord' && isInlineItem(node)}
<div class="yt-embed"><iframe src="https://www.youtube-nocookie.com/embed/{link.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
{/if}

{#if link.__typename == 'EventRecord' && isInlineItem(node)}
<div class="flex justify-center">
<div class="rounded-2xl shadow-xl p-5 not-prose">
	<div class="uppercase mt-2 text-sm font-bold">
		{formatDay(link.date)}, <span class="text-ruby">{formatDateLong(link.date)}</span>
		{1900 + link.date.getYear()}
	</div>
<Event
	name={link.promotedName}
	gigId={link.id}
	performers={link.performersListJson}
	venue={link.venue}
	website={link.ticketUrl}
	comment={link.furtherInfo}
	initials={link.furtherInfoContributorInitials}
	calendarLink={createCalendarLink(link)}
	time={link.time}
	isFree={link.isFree}
	isPwyc={link.isPwyc}
/>
</div>
</div>
{/if}

{#if link.__typename == 'EmbedTweetModelRecord' && isInlineItem(node)}
<div class="font-sans rounded border px-6 py-4 max-w-md">
	<div class="flex items-center">
	  <img src="{link.profileImage.url}" class="mt-0 mb-0 h-12 w-12 rounded-full" alt="{
				link.name
			} Profile Image" />
	  <div class="flex leading-tight flex-col ml-4">
		  <a class="font-bold text-black" href="https://twitter.com/{link.username}">{
				link.name
			}</a>
		  <span class="text-grey">@{link.username}</span>
		</div>
		<svg viewBox="328 355 335 276" class="ml-auto" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
		  <path d="    M 630, 425    A 195, 195 0 0 1 331, 600    A 142, 142 0 0 0 428, 570    A  70,  70 0 0 1 370, 523    A  70,  70 0 0 0 401, 521    A  70,  70 0 0 1 344, 455    A  70,  70 0 0 0 372, 460    A  70,  70 0 0 1 354, 370    A 195, 195 0 0 0 495, 442    A  67,  67 0 0 1 611, 380    A 117, 117 0 0 0 654, 363    A  65,  65 0 0 1 623, 401    A 117, 117 0 0 0 662, 390    A  65,  65 0 0 1 630, 425    Z"    style="fill:#3BA9EE;"/>
		</svg>
	  </div>
	  <div class=" mt-3 mb-1 leading-normal text-lg">{link.content}</div>
	  <div class="text-grey mb-3 text-sm"><a href="{
						link.tweetUrl
					}">10:11 AM - Jun 26, 2022</a></div>
	  <div class="flex text-grey text-sm">
		<div class="flex items-center mr-4">
		  <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path class="fill-current"  d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"/></svg>
		  <span>{link.replies}</span>
		</div>
		<div class="flex items-center mr-4">
		  <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path class="fill-current" d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"/></svg>
		  <span>{link.retweets}</span>
		</div>
		<div class="flex items-center">
		  <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path class="fill-current" d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"/></svg>
		  <span>{link.likes}</span>
		</div>
	  </div>
	</div>
	{/if}