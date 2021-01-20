---
title: Hijacking Screenreaders with CSS
type: Talk
date: 2021-01-19T13:00:00-05:00
speakers:
  - Ben Myers
---

<aside id="call-to-action" aria-labelledby="call-to-action-heading">
	<h2 id="call-to-action-heading">Come join us!</h2>
	<p>This event is happening at <strong>10am PST on Tuesday, January 19</strong> on our Discord server. Come join us there, and add this event to your calendar so you don't miss out!</p>
	<div class="cta-links">
		<a aria-label="Join the Discord" href="https://discord.gg/dx7ZWCy">👋 Join the Discord</a>
		<a aria-label="Add to Calendar" href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20210119T180000Z%2F20210119T190000Z&text=Hijacking%20Screenreaders%20with%20CSS&location=https%3A%2F%2Fdiscord.gg%2Fdx7ZWCy&details=Mislead%20screenreaders%20into%20changing%20how%20they%20announce%20content%20or%20into%20forgetting%20the%20underlying%20semantics%20of%20your%20page%20%E2%80%94%20one%20CSS%20rule%20at%20a%20time.%20Behold%2C%20the%20chaos%20that%20can%20be%20caused%20with%20just%20a%20single%20%60list-style%3A%20none%60%20or%20a%20%60text-transform%3A%20uppercase%60!%20We'll%20challenge%20the%20separation%20of%20presentation%20and%20content%2C%20go%20on%20a%20tour%20through%20browser%20and%20operating%20system%20internals%2C%20and%20learn%20how%20our%20page%20is%20exposed%20to%20assistive%20technology.">📅 Add to Calendar</a>
	</div>
</aside>

**Mislead screenreaders** into changing how they announce content or into forgetting the underlying semantics of your page — **one CSS rule at a time.** Behold, the chaos that can be caused with just a single `list-style: none` or a `text-transform: uppercase`! We'll challenge the separation of presentation and content, go on a tour through browser and operating system internals, and learn how our page is exposed to assistive technology. **You won't want to miss this one.**

Ben Myers is a frontend developer with a passion for accessibility. He is a Software Engineer II at USAA's bank. He blogs about web accessibility at [benmyers.dev](https://benmyers.dev), and is about to start [streaming about accessibility and semantics on Twitch](https://twitch.tv/SomeAnticsDev)! You can find him on Twitter at [@BenDMyers](https://twitter.com/bendmyers).

{% youtube-video 'https://youtu.be/OYVxsWCE7rE' %}

## Helpful Links

- [Get the slides!](https://benmyers.dev/assets/slides/Hijacking%20Screenreaders%20with%20CSS%20-%20ReactJS%20Dallas.pptx)
- [Play with the demos!](https://hijacking-screenreaders-with-css-demos.netlify.app/)
- Ben's blogposts about [the accessibility tree](https://benmyers.dev/blog/accessibility-tree/) and [how CSS can influence screenreaders](https://benmyers.dev/blog/css-can-influence-screenreaders/), which inspired this talk
- ["Screen Readers and CSS: Are We Going Out of Style (and into Content)?"](https://webaim.org/blog/screen-readers-and-css/) by John Northup for the WebAIM Blog
- [Core Accessibility API Mappings 1.2](https://www.w3.org/TR/core-aam-1.2/)
- ["The Accessibility Tree Training Guide"](http://whatsock.com/training/) by WhatSock
- [Table heuristics in the Chromium source code](https://chromium.googlesource.com/chromium/blink/+/master/Source/modules/accessibility/AXTable.cpp)
- [Table heuristics in the Firefox source code](https://dxr.mozilla.org/mozilla-central/source/accessible/generic/TableAccessible.cpp)
- ["Tables, CSS Display Properties, and ARIA"](https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html) by Adrian Roselli
- [James Craig's thread on WebKit and lists](https://twitter.com/cookiecrook/status/1337226933822603270)
