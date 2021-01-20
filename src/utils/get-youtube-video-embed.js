/**
 * Generates the markup for a responsive YouTube video embed.
 * @param {string} url URL of the YouTube upload
 * @returns {string} YouTube embed markup
 */
module.exports = function getYouTubeVideoEmbed(url) {
	return `<div data-responsive-youtube--container>
    <iframe src="//www.youtube.com/embed/${getVideoIdFromYouTubeURL(url)}" frameborder="0" allowfullscreen></iframe>
  </div>`;
};

function getVideoIdFromYouTubeURL(url) {
	let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	let match = url.match(regExp);

	return match && match[2].length === 11 ? match[2] : null;
}
