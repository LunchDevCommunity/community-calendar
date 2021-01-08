---
title: Building Twitch Overlays Using Web Technology
type: Talk
date: 2021-01-07
speakers:
  - Ben Myers
---

You can [view the finished code on GitHub](https://github.com/LunchDevCommunity/twitch-overlay/)!

The streaming software [<abbr title="Open Broadcaster Software">OBS</abbr>](https://obsproject.com/) lets you use an embedded browser as an input. These means that you can use familiar web technologies to customize your Twitch overlays!

In this event, we covered:

- Using <abbr title="Open Broadcaster Software">OBS</abbr>'s `Browser` source
- The [tmi.js](https://tmijs.com/) and [ComfyJS](https://github.com/instafluff/ComfyJS) JavaScript libraries for getting Twitch chat events
- Using <abbr title="Document Object Model">DOM</abbr> manipulation to display chat messages
- Using `overflow` and flexbox in CSS to get the rising chatbox feel

<div data-responsive-youtube--container>
<iframe src="https://www.youtube.com/embed/aJiIF9I6fuc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Mentioned Resources

- [tmi.js](https://tmijs.com/) - a JavaScript library for hooking up your code to a Twitch chat
- [ComfyJS](https://github.com/instafluff/ComfyJS) - a community-built wrapper around tmi.js that's a little more dev-friendly
- [John Otander's post on `tomato`](https://johno.com/tomato/) - John agrees that `tomato` is the best named CSS color
