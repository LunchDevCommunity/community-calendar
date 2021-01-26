const { google, outlook, office365, ics } = require('calendar-link');
const { isBefore } = require('date-fns');
const url = 'https://events.lunch.dev/discord';
const location = 'Lunch Dev Community Discord at events.lunch.dev';

function updateDesc(description, url) {
	description
		? `
			Learn with us in the Lunch Dev Community Discord at <a href="${url}">${url}</a>

			${description}
	`
		: `Learn with us in the Lunch Dev Community Discord at <a href="${url}">${url}</a>`;
}

module.exports = {
	eleventyComputed: {
		calendarLinks: {
			isPastEvent: ({ date: start }) => {
				return isBefore(new Date(), new Date(start));
			},
			googleLink: ({ title, description, date: start }) => {
				return google({
					title,
					description: updateDesc(description, url),
					start,
					duration: [1, 'hour'],
					location,
					url,
				});
			},
			outlookLink: ({ title, description, date: start }) => {
				return outlook({
					title,
					description: updateDesc(description, url),
					start,
					duration: [1, 'hour'],
					location,
					url,
				});
			},
			officeLink: ({ title, description, date: start }) => {
				return office365({
					title,
					description: updateDesc(description, url),
					start,
					duration: [1, 'hour'],
					location,
					url,
				});
			},
			icsLink: ({ title, description, date: start }) => {
				return ics({
					title,
					description: updateDesc(description, url),
					start,
					duration: [1, 'hour'],
					location,
					url,
				});
			},
		},
	},
};
