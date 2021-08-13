const fetch = require('node-fetch');

/**
 *
 * @param {Stream} stream
 * @returns {CollectionItem}
 */
function convertStreamToCollectionItem(stream) {
	return {
		data: {
			date: stream.date,
			speakerDetails: stream.hosts.map((host) => ({
				name: host.name,
				avatar: host.avatar,
			})),
			speakers: stream.hosts.map((host) => host.name),
			title: `Some Antics: ${stream.fullTitle}`,
			type: 'Live Event',
		},
		fileSlug: `some-antics-${stream.slug}`,
		url: stream.url,
	};
}

module.exports = function () {
	return fetch('https://someantics.dev/api/upcomingStreams.json')
		.then((res) => res.json())
		.then((res) => res.events.map(convertStreamToCollectionItem));
};

/**
 * @typedef {object} Stream
 * @property {string} title
 * @property {string} fullTitle
 * @property {string} date
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
