const { google, outlook, office365, ics } = require('calendar-link');
const { isBefore } = require('date-fns');
const url = 'https://events.lunch.dev/discord';
const location = 'Lunch Dev Community Discord at events.lunch.dev';

module.exports = {
	eleventyComputed: {
		googleLink: ({ title, description, date: start }) => {
			if (isBefore(new Date(start), new Date())) {
				return;
			}

			return google({
				title,
				description,
				start,
				duration: [1, 'hour'],
				location,
				url,
			});
		},
		outlookLink: ({ title, description, date: start }) => {
			if (isBefore(new Date(start), new Date())) {
				return;
			}

			return outlook({
				title,
				description,
				start,
				duration: [1, 'hour'],
				location,
				url,
			});
		},
		officeLink: ({ title, description, date: start }) => {
			if (isBefore(new Date(start), new Date())) {
				return;
			}

			return office365({
				title,
				description,
				start,
				duration: [1, 'hour'],
				location,
				url,
			});
		},
		icsLink: ({ title, description, date: start }) => {
			if (isBefore(new Date(start), new Date())) {
				return;
			}

			return ics({
				title,
				description,
				start,
				duration: [1, 'hour'],
				location,
				url,
			});
		},
	},
};
