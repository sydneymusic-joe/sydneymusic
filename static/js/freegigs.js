const freegigs = document.getElementById('toggle-freegigs');
if (freegigs) {
	freegigs.addEventListener('click', function () {
		document.body.classList.toggle('freegigs');
	});
}
