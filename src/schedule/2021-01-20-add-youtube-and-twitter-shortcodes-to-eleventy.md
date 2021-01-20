---
title: Add YouTube and Twitter Shortcodes to Eleventy
type: Mob Job
date: 2021-01-20T10:00:00-08:00
---

<aside aria-labelledby="call-to-action-heading" id="call-to-action"><h2 id="call-to-action-heading">Come join us!</h2><p>This event is happening at <strong>10am PST on Tuesday, January 19</strong> on our Discord server. Come join us there, and add this event to your calendar so you don't miss out!</p><div class="cta-links"><a href="https://discord.gg/dx7ZWCy" aria-label="Join the Discord">👋 Join the Discord</a> <a href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210119T180000Z%2F20210119T190000Z&amp;text=Hijacking%20Screenreaders%20with%20CSS&amp;location=https%3A%2F%2Fdiscord.gg%2Fdx7ZWCy&amp;details=Mislead%20screenreaders%20into%20changing%20how%20they%20announce%20content%20or%20into%20forgetting%20the%20underlying%20semantics%20of%20your%20page%20%E2%80%94%20one%20CSS%20rule%20at%20a%20time.%20Behold%2C%20the%20chaos%20that%20can%20be%20caused%20with%20just%20a%20single%20%60list-style%3A%20none%60%20or%20a%20%60text-transform%3A%20uppercase%60!%20We'll%20challenge%20the%20separation%20of%20presentation%20and%20content%2C%20go%20on%20a%20tour%20through%20browser%20and%20operating%20system%20internals%2C%20and%20learn%20how%20our%20page%20is%20exposed%20to%20assistive%20technology." aria-label="Add to Calendar">📅 Add to Calendar</a></div></aside>

[chantastic](https://twitter.com/home) and the Lunch Dev crew add YouTube and Twitter shortcodes to [events.lunch.dev](https://events.lunch.dev).

The goal: instead of copying-pasting large embed codes into markdown files, new posts can use shortcodes like `youtube` and `twitter` with a content url to add rich, embedded content.

## References

- [Shortcodes — Eleventy Documentation](https://www.11ty.dev/docs/shortcodes/)
- [Convert a youtube video url to embed code — stackoverflow](https://stackoverflow.com/a/21607897)
- [Convert Tweet URLs using oEmbed](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview)
- [node-fetch](https://github.com/node-fetch/node-fetch)
