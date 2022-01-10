// require('dotenv').config();
const axios = require('axios');
const qs = require('querystring');

let accessToken;

/**
 * Determines whether a given channel is streaming right now
 * @param {string} channel
 * @return {boolean} whether that channel is streaming
 */
async function isStreaming(channel) {
	const {
		data: { data: streams },
	} = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${channel}`, {
		headers: {
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${accessToken}`,
		},
	});

	return streams.length > 0;
}

module.exports = {
	eleventyComputed: {
		online: async ({ streamers }) => {
			if (!process.env.TWITCH_CLIENT_ID) {
				return [];
			}

			const opts = {
				client_id: process.env.TWITCH_CLIENT_ID,
				client_secret: process.env.TWITCH_CLIENT_SECRET,
				grant_type: 'client_credentials',
				scopes: '',
			};
			const params = qs.stringify(opts);

			const { data } = await axios.post(`https://id.twitch.tv/oauth2/token?${params}`);
			accessToken = data.access_token;

			let activeStreamers = [];
			for (let streamer of streamers) {
				const live = await isStreaming(streamer);
				if (live) {
					activeStreamers.push(streamer);
				}
			}

			return activeStreamers;
		},
	},
};
