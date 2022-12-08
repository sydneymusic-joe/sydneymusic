<script context="module">
	import API from '$lib/contentful/';
	import { groupBy } from '../../lib/globals.mjs';

    export let key = 'AIzaSyCW1mfMQMzS9unKFF_XIc9TlIqDm2uw2T0';

    let container;

</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key={key}&callback=initMap">
	</script>


    <script async>
        window.initMap = function() {
            let map;
            let zoom = 8;
            let center = {lat: -34.397, lng: 150.644};
            
            map = new google.maps.Map(document.getElementById('map-container'), {
                zoom,
                center
            });
        }
    </script>
</svelte:head>

<div id="gigmap" class="">
    <div class="toolbar">
        <div>Today</div>
        <div>Tomorrow</div>
        <div>Next 7 Days</div>
        <div>This Weekend</div>
    </div>

    <div class="full-screen" id="map-container"></div>
</div>