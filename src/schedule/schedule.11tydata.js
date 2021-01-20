const { google, outlook, office365, yahoo, ics } = require('calendar-link');
const simpleIcons = require('simple-icons');
const { isBefore } = require('date-fns');

module.exports = {
	eleventyComputed: {
		addToCalendarList: ({ title, description, date: start })) => {
			if (isBefore(new Date(data.date), new Date())) {
				return;
			}

			let event = { title, description, start, duration: [1, 'hour'] };

			return `
			<div>
				<small>Add this event to your calendar: </small>
				<ul class="add-to-calendar">
					<li>
						<a aria-label="Add to Google Calendar" href="${google(event)}">
							${simpleIcons.get('Google Calendar').svg}
						</a>
					</li>
					<li>
						<a aria-label="Add to Outlook Calendar" href="${outlook(event)}">
							${simpleIcons.get('Microsoft Outlook').svg}
						</a>
					</li>
					<li>
						<a aria-label="Add to Office 365 Calendar" href="${office365(event)}">
							${simpleIcons.get('Microsoft Office').svg}
						</a>
					</li>
					<li>
						<a aria-label="Add to ics Calendar" href="${ics(event)}">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.89001 22 3 21.1 3 20L3.01001 6C3.01001 4.9 3.89001 4 5 4H6V2H8V4H16V2H18V4ZM5 10V20H19V10H5ZM19 8H5V6H19V8ZM17 13H12V18H17V13Z" />
							</svg>
						</a>
					</li>
				</ul>
			</div>
			`;
		},
	},
};
