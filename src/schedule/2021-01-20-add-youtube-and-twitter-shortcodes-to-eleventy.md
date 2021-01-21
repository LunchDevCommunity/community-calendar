---
title: Add YouTube and Twitter Shortcodes to Eleventy
type: Mob Job
date: 2021-01-20T10:00:00-08:00
---

[chantastic](https://twitter.com/home) and the Lunch Dev crew add YouTube and Twitter shortcodes to [events.lunch.dev](https://events.lunch.dev).

The goal: instead of copying-pasting large embed codes into markdown files, new posts can use shortcodes like `youtube` and `twitter` with a content url to add rich, embedded content.

{% youtube-video 'https://youtu.be/FbBq_wcmL6o' %}

[Check out our pull request!](https://github.com/LunchDevCommunity/community-calendar/pull/39)

## References

- [Shortcodes — Eleventy Documentation](https://www.11ty.dev/docs/shortcodes/)
- [Convert a youtube video url to embed code — stackoverflow](https://stackoverflow.com/a/21607897)
- [Convert Tweet URLs using oEmbed](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview)
- [node-fetch](https://github.com/node-fetch/node-fetch)
