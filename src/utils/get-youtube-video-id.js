module.exports = function (url) {
	return `<div data-responsive-youtube--container>
    <iframe src="//www.youtube.com/embed/${getVideoIdFromURL(url)}" frameborder="0" allowfullscreen></iframe>
  </div>`;
};

function getVideoIdFromURL(url) {
	let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	let match = url.match(regExp);

	return match && match[2].length === 11 ? match[2] : null;
}
