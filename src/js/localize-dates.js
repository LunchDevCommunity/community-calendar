document.querySelectorAll('[data-js-replace-content="datetime"]').forEach((dateEl) => {
	let date = new Date(dateEl.getAttribute('datetime'));
	debugger;

	dateEl.textContent = date.toLocaleString(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZoneName: 'short',
		hour: 'numeric',
		minute: 'numeric',
	});
});
