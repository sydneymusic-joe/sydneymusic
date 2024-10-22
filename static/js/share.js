window.addEventListener('load', () => {
	const htmlToImage = window.htmlToImage;

	if (!htmlToImage) {
		console.error('html-to-image library is not loaded');
		return;
	}

	document.querySelectorAll('.share-event-button').forEach((button) => {
		button.addEventListener('click', async (e) => {
			const gigId = e.target.dataset.gigId;
			const element = document.getElementById(`event-shared-${gigId}`);
			console.log(element);

			if (element) {
				try {
					const dataUrl = await htmlToImage.toPng(element, {
						width: 1080,
						height: 1920
					});

					const link = document.createElement('a');
					link.href = dataUrl;
					link.download = `gig-share-${gigId}.png`;
					link.click();
				} catch (error) {
					console.error('Error generating image:', error);
				}
			} else {
				console.error('Could not find the EventShared element for gigId:', gigId);
			}
		});
	});
});
