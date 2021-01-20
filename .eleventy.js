const markdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');
const eleventyPluginFilesMinifier = require('@sherby/eleventy-plugin-files-minifier');

const { isAfter, isBefore, isToday, format } = require('date-fns');

const isProduction = process.env.NODE_ENV === 'production';
// It's value taken in scripts(package.json) returned boolean

// Some helpers to make sure our event frontmatter is :100:
// Make events have an eleventy and js-yaml-friendly standardized date format of:
// date: 2021-01-11T21:00:00-08:00
// See: https://www.11ty.dev/docs/dates/#setting-a-content-date-in-front-matter
// Note: we make sure the parsed date is valid, then check the actual raw input format to make sure we have consistency

const dateFormatRegex = /(date:)\s[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\+|\-)[0-9]{2}:[0-9]{2}/gm;
const isValidDate = (date, rawInputContent) =>
	!Number.isNaN(Date.parse(date)) && rawInputContent.match(dateFormatRegex);
const isValidTitle = (title = '') => title.trim().length > 2;
const isValidEvent = (event) =>
	isValidTitle(event.data.title) && isValidDate(event.data.date, event.template.inputContent);

module.exports = (eleventyConfig) => {
	eleventyConfig.addCollection('events', (collectionApi) => {
		return collectionApi.getFilteredByGlob('./src/schedule/*.md');
	});
	eleventyConfig.addCollection('pastEvents', (collectionApi) => {
		return collectionApi
			.getFilteredByGlob('./src/schedule/*.md')
			.filter((event) => isValidEvent(event) && isBefore(new Date(event.data.date), new Date()));
	});
	eleventyConfig.addCollection('upcomingEvents', (collectionApi) => {
		// We include `isToday` assuming that a daily build job is ran at 12:01am,
		// and we're okay with a daily event potentially showing even if it's in the past

		return collectionApi
			.getFilteredByGlob('./src/schedule/*.md')
			.filter(
				(event) =>
					isValidEvent(event) && (isAfter(new Date(event.data.date), new Date()) || isToday(new Date(event.data.date)))
			);
	});

	let markdown = markdownIt({
		typographer: true,
		html: true,
	});

	markdown.use(emoji);

	eleventyConfig.setLibrary('md', markdown);

	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/css');

	eleventyConfig.addFilter('asDateOnly', function (date) {
		return format(new Date(date), 'PP');
	});

	eleventyConfig.addFilter('asDateTime', function (date) {
		return `${format(new Date(date), 'MMM d, yyyy p')} PST`;
	});

	eleventyConfig.addShortcode('youtube-video', function (url) {
		function getId(url) {
			const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
			const match = url.match(regExp);

			return match && match[2].length === 11 ? match[2] : null;
		}

		return `<div data-responsive-youtube--container>
			<iframe src="//www.youtube.com/embed/${getId(url)}" frameborder="0" allowfullscreen></iframe>
		</div>`;
	});

	if (isProduction) {
		eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
	}

	return {
		dir: {
			input: './src/',
		},
	};
};
