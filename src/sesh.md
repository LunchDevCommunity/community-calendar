---
title: Using Sesh to Plan Events
layout: layouts/page.html
---

Lately, we've been trying out a Discord bot called [Sesh](https://sesh.fyi), which helps us get RSVPs for events and send out reminders — independent of your timezone. Currently, Sesh events are set up in our **#live-event-text** channel, though that's subject to change.

## RSVPing to Sesh Events

An event is going to happen, and you'd like to take part! Welcome! We're happy to have you!

Whenever someone sets up an event, Sesh posts a big message that looks something like this:

![Discord message from the Sesh bot. The message describes an event called Sample Event, which takes place on Wednesday, Jan 13 at 4pm CST. The message has three reactions: a checkmark, a clock, and a notepad with a pencil.](/assets/sesh-screenshot.png)

Sesh reacts to its own message with three emojis: ✅, 🕐, and 📝. **You can click these reactions to RSVP or to get a personalized timezone conversion.**

- **✅:** Click this reaction to **provide your RSVP** for the event. Sesh will privately message you to set up (optional) reminders for the event. If the event organizer changes any details, Sesh will notify you. If you want to unRSVP, click the ✅ emote again.

- **🕐:** When you click this reaction, Sesh will privately message you the event's time in **your personal timezone.** This requires you to set up your timezone with Sesh — the bot will walk you through setting your timezone in your direct messages.

- **📝:** Click this reaction to **edit your event.** You can only do this if you created the event, or if you're a server admin.

## Creating and Managing Sesh Events

So you'd like to organize an event! That's great! Once you've figured out when it should happen, you should create a Sesh event so others can start RSVPing!

To create a Sesh event, you'll want to go to **#live-event-text** or whichever channel is the most appropriate and use the `!create` command. Here are a few examples of `!create` commands you could use:

- `!create React Podcast Listening Party on January 27 at 12pm PST`
- `!create Rust Book Club on Wednesday at 7pm`
- `!create Building an Eleventy Community Calendar tomorrow 11am to 12:30pm`

There are probably other things you could do — the natural language processing on these commands seems pretty intuitive.

<aside aria-labelledby="default-timezone">
<h3 id="default-timezone">Watch out for default timezones!</h3>
<p>If you don't specify the timezone when you create an event, <strong>Sesh will use the server's default timezone, which is currently set to Eastern Standard Time (EST).</strong></p>
</aside>

If you've created an event that you'd now like to **modify or delete**, click the 📝 reaction on Sesh's message. Sesh will privately message you something that looks like this:

![Discord message from the Sesh bot. The header reads 'Edit Event Sample Event'. It's followed by a link which reads 'Click here to edit this event.' The message has two reactions: a wastebasket and a checkmark.](/assets/sesh-edit.png)

To edit the event, click the provided link. To delete the event, react to Sesh's message with both the wastebasket and the checkmark emojis that Sesh has provided.

### `#sesh` url fragment

Event urls have a hidden section with pre-filled command for creating a sesh event in Discord. Append `#sesh` to an event url to make it visible.

![Sample hidden command section in event page. The label reads 'Paste this sesh command into a Discord channel to create a joinable event:'. The sample command reads '!create Some Antics: Getting Started with Automated Accessibility Testing, with Lucia Cerchie on May 18, 2021 10:00 AM PST for 1 hour'.](/assets/sesh-url.png)

## I need a bit more information!

You can find Sesh's full list of commands at [sesh.fyi/manual](https://sesh.fyi/manual/). Most of these commands require server admin privileges, however.
