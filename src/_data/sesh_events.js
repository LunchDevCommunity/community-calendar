// https://www.11ty.dev/docs/data-js/
const ical = require('node-ical');
const Cache = require('@11ty/eleventy-cache-assets');
const { comparators } = require('generate-comparators');

const byDate = comparators((event) => event.start);

/**
 * Transforms a events provided by the Sesh into a page fit for the upcomingEvents collection.
 * @param {Event} event
 * @returns {CollectionItem} event in collection item format
 */
function convertEventToCollectionItem(event) {
	return {
		data: {
			date: new Date(event.start), // new Date(event.date),
			speakerDetails: [] /*event.hosts.map((host) => ({
				name: host.name,
				avatar: host.avatar,
			})) */,
			speakers: '', // TODO: event.hosts.map((host) => host.name),
			title: event.summary, // `Some Antics: ${event.fullTitle}`,
			description: event.description,
			type: '', // TODO: 'Live Event',
		},
		url: '', // TODO: event.url,
	};
}

/**
 * Fetches and caches upcoming Some Antics streams
 * @returns {CollectionItem[]} list of upcoming streams
 */
module.exports = async function () {
	let responseBuffer = await Cache('https://sesh.fyi/api/calendar/v2/trUTSudp7aDZdGw2S2ye6r.ics', {
		duration: '1d',
		type: 'text',
	});
	let events = Object.values(ical.sync.parseICS(responseBuffer.toString()));
	let reducedEvents = events.slice(1);
	let formattedEvents = reducedEvents.map(convertEventToCollectionItem);
	return formattedEvents;
};

/**
 * @typedef {object} Event
 * @property {string} type event type (Sesh)
 * @property {string} uid unique event id (Sesh)
 * @property {Param[]} hosts list of people who could be said to be running or hosting the event
 * 
//     // params: collection
//     // uid: string
//     // sequence: string-num
//     // dtstamp: date
//     // start: date
//     // datetype: string ("date-time")
//     // end: string ("date-time")
//     // summary: string
//     // description: string
 * @property {string} date event start time in ISO format
 * @property {string} description a full description of the event
 * @property {string} slug an identifier for the event, unique from others in the same series
 * @property {string} url a URL for finding more information about the event
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
