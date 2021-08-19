const Cache = require('@11ty/eleventy-cache-assets');

/**
 * Transforms a stream provided by the Some Antics API into a page fit for the upcomingEvents collection.
 * @param {Stream} stream
 * @returns {CollectionItem} stream in collection item format
 */
function convertStreamToCollectionItem(stream) {
	return {
		data: {
			date: new Date(stream.date),
			speakerDetails: stream.hosts.map((host) => ({
				name: host.name,
				avatar: host.avatar,
			})),
			speakers: stream.hosts.map((host) => host.name),
			title: `Some Antics: ${stream.fullTitle}`,
			type: 'Live Event',
		},
		url: stream.url,
	};
}

/**
 * Fetches and caches upcoming Some Antics streams
 * @returns {CollectionItem[]} list of upcoming streams
 */
module.exports = function () {
	const endpoint = 'https://someantics.dev/api/upcomingStreams.json';
	return Cache(endpoint, { duration: '1d', type: 'json' }).then((res) => res.events.map(convertStreamToCollectionItem));
};

/**
 * @typedef {object} Stream
 * @property {string} title
 * @property {string} fullTitle
 * @property {Date} date
 * @property {string} slug
 * @property {string} url
 * @property {Host[]} hosts
 */

/**
 * @typedef {object} Host
 * @property {string} name
 * @property {string} avatar
 * @property {string} pronouns
 * @property {string} [instagram]
 * @property {string} [twitter]
 * @property {string} [website]
 */

/**
 * @typedef {object} CollectionItem
 * @property {object} data
 * @property {string} data.date
 * @property {string[]} data.speakers
 * @property {string} data.title
 * @property {string} data.type
 * @property {string} fileSlug
 * @property {string} url
 */
