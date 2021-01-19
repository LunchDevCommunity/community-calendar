const { google, outlook, office365, yahoo, ics } = require('calendar-link');
const simpleIcons = require('simple-icons');
const { isBefore } = require('date-fns');

class Event {
	data() {
		return {
			layout: 'layouts/event.html',
		};
	}

	render({ title, date, description, content }) {
		if (isBefore(new Date(date), new Date())) {
			return;
		}
		const googleIcon = simpleIcons.get('Google Calendar');
		const outlookIcon = simpleIcons.get('Microsoft Outlook');
		const officeIcon = simpleIcons.get('Microsoft Office');
		const yahooIcon = simpleIcons.get('Yahoo');

		const event = {
			title,
			description,
			start: date,
			duration: [1, 'hour'],
		};

		const googleLink = google(event);
		const outlookLink = outlook(event);
		const officeLink = office365(event);
		const yahooLink = yahoo(event);
		const icsLink = ics(event);

		return `			
			<div>
				<small>Add this event to your calendar: </small>
				<ul class='add-to-calendar'>
					<li><a aria-label="Add to Google Calendar" href=${googleLink}>${googleIcon.svg}</a></li>
					<li><a aria-label="Add to Outlook Calendar" href=${outlookLink}>${outlookIcon.svg}</a></li>
					<li><a aria-label="Add to Office 365 Calendar" href=${officeLink}>${officeIcon.svg}</a></li>
					<li><a aria-label="Add to Yahoo Calendar" href=${yahooLink}>${yahooIcon.svg}</a></li>
					<li>
						<a aria-label="Add to ics Calendar" href=${icsLink}>
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.89001 22 3 21.1 3 20L3.01001 6C3.01001 4.9 3.89001 4 5 4H6V2H8V4H16V2H18V4ZM5 10V20H19V10H5ZM19 8H5V6H19V8ZM17 13H12V18H17V13Z" />
							</svg>
						</a>
					</li>
				</ul>
				${content}
			</div>
		`;
	}
}

module.exports = Event;
