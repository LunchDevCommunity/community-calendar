/**
 * Generates the markup for a responsive Twitch channel embed.
 * @param {string} channel Twitch channel name
 * @returns {string} Twitch embed markup
 */
module.exports = function getTwitchChannelEmbed(channel) {
	return `<div id="twitch-embed" data-responsive-youtube--container></div>
	<script src="https://embed.twitch.tv/embed/v1.js"></script>
	<script type="text/javascript">
		new Twitch.Embed('twitch-embed', {channel: '${channel}'});
	</script>`;
};
