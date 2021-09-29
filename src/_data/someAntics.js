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
	return Cache(endpoint, { duration: '1d', type: 'json' }).then((res) =>
		res.events.map(convertStreamToCollectionItem).splice(0, 4)
	);
};

/**
 * @typedef {object} Stream
 * @property {string} title event title (in short form, if one is needed)
 * @property {string} fullTitle event title (in long form, if one is needed)
 * @property {string} date event start time in ISO format
 * @property {string} description a full description of the event
 * @property {string} slug an identifier for the event, unique from others in the same series
 * @property {string} url a URL for finding more information about the event
 * @property {Host[]} hosts list of people who could be said to be running or hosting the event
 * @property {Object} calendarLinks a map of (optional) "Add to Calendar" links
 * @property {string} [calendarLinks.google] an (optional) "Add to Google Calendar" link
 */

/**
 * @typedef {object} Host one of potentially many people who could be said to be "hosting" an event
 * @property {string} name host's full name
 * @property {string} avatar image source for host's avatar
 * @property {string} pronouns host's pronouns
 * @property {string} [instagram] host's Instagram username (without the `@` sign)
 * @property {string} [twitter] host's Twitter username (without the `@` sign)
 * @property {string} [website] URL for a meaningful personal site pertaining to the host
 */

/**
 * @typedef {object} CollectionItem
 * @property {object} data
 * @property {Date} data.date event start time
 * @property {string[]} data.speakers
 * @property {string} data.title
 * @property {string} data.type
 * @property {string} fileSlug
 * @property {string} url
 */
