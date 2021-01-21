---
title: Hijacking Screenreaders with CSS
type: Talk
date: 2021-01-19T13:00:00-05:00
speakers:
  - Ben Myers
---

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
