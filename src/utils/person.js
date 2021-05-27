module.exports.getAvatarUrl = function (user) {
	if (!user) {
		return '/assets/avatar-fallback.jpg';
	}
	
	if (user.avatar_url) {
		return user?.avatar_url;
	}

	if (user?.github) {
		return `https://avatars.githubusercontent.com/${user.github}`;
	}

	return '/assets/avatar-fallback.jpg';
};
