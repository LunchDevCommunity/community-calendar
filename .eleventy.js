const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy');
const markdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');
const eleventyPluginFilesMinifier = require('@sherby/eleventy-plugin-files-minifier');
const { comparators } = require('generate-comparators');
const getTwitchChannelEmbed = require('./src/utils/get-twitch-channel-embed');
const getYouTubeVideoEmbed = require('./src/utils/get-youtube-video-embed');
const personUtils = require('./src/utils/person');

const { isAfter, isBefore, format, isToday } = require('date-fns');

const isProduction = process.env.NODE_ENV === 'production';
// It's value taken in scripts(package.json) returned boolean

const isValidTitle = (title = '') => title.trim().length > 2;
const isValidEvent = (event) => isValidTitle(event.data.title);

const byDate = comparators((event) => event.data.date);

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
		name: 'onrequest',
		functionsDir: './netlify/functions/',
		copy: ['src/utils/'],
	});

	eleventyConfig.addCollection('events', (collectionApi) => {
		return collectionApi.getFilteredByGlob('./src/schedule/*.md');
	});

	eleventyConfig.addCollection('pastEvents', (collectionApi) => {
		return collectionApi
			.getFilteredByGlob('./src/schedule/*.md')
			.filter((event) => isValidEvent(event) && isBefore(new Date(event.data.date), new Date()));
	});

	eleventyConfig.addCollection('upcomingEvents', (collectionApi) => {
		const serverEvents = collectionApi
			.getFilteredByGlob('./src/schedule/*.md')
			.filter((event) => isValidEvent(event) && isAfter(new Date(event.data.date), new Date()));

		const someAnticsStreams = collectionApi.items[0].data.someAntics;

		return [...serverEvents, ...someAnticsStreams].sort(byDate.asc);
	});

	let markdown = markdownIt({
		typographer: true,
		html: true,
	});

	markdown.use(emoji);

	eleventyConfig.setLibrary('md', markdown);

	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addPassthroughCopy('src/js');
	eleventyConfig.addPassthroughCopy('_redirects');

	eleventyConfig.addFilter('asDateOnly', function (date) {
		return format(new Date(date), 'PP');
	});

	eleventyConfig.addFilter('toISOString', function (date) {
		return new Date(date).toISOString();
	});

	eleventyConfig.addShortcode('twitch', getTwitchChannelEmbed);
	eleventyConfig.addShortcode('youtube-video', getYouTubeVideoEmbed);
	eleventyConfig.addFilter('asDateTime', function (date) {
		return `${format(new Date(date), 'MMM d, yyyy p')} PST`;
	});

	eleventyConfig.addFilter('pageSourcePath', function (inputPath) {
		return `https://github.com/LunchDevCommunity/community-calendar/edit/main/${inputPath.replace('./', '')}`;
	});

	eleventyConfig.addFilter('personAvatar', personUtils.getAvatarUrl);

	if (isProduction) {
		eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
	}

	return {
		dir: {
			input: './src/',
		},
	};
};
