const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const emoji = require('node-emoji');

const { EVENT_TYPES, printEmojiRibbon } = require('../utils');

const welcomePhrase = `Welcome to the Lunch.Dev Community Calendar Event Generator!`;
const pizzaCount = welcomePhrase.length / 2 + 3;

console.log(
  emoji.emojify(chalk`
${printEmojiRibbon('pizza', pizzaCount)}

{green.bold :pizza: ${welcomePhrase} :pizza:}

${printEmojiRibbon('pizza', pizzaCount)}

                   {yellow Let's do awesome stuff}

`)
);

const timeZoneToOffset = {
  PST: '-08:00',
  CST: '-06:00',
  EST: '-05:00',
};

const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the name of this event?",
    validate: function (value) {
      const valid = value.length > 5;

      return valid || `It's probably a good idea to have descriptive title with more than 5 characters... maybe?`;
    },
  },
  {
    type: 'list',
    name: 'event_type',
    message: 'What kind of event is this?',
    choices: EVENT_TYPES,
  },
  {
    type: 'input',
    name: 'date',
    message: 'What is the date of the event? (format: DD/MM/YYYY)',
    validate: function (value) {
      // Naive validation - please don't pass bad dates... I'm so bad at regex :(
      const valid = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/g);

      return !!valid || 'Please enter a date in a format like: 03/22/2233';
    },
  },
  {
    type: 'list',
    name: 'timezone',
    message: 'What timezone are you planning for?',
    choices: Object.keys(timeZoneToOffset),
    default: 'PST',
  },
  {
    type: 'input',
    name: 'time',
    message: 'What hh or hh:mm (10 or 10:30)?',
    validate: function (value) {
      const valid = value.match(/^([0-9]{2}$|[0-9]{2}\:[0-9]{2})/);

      return !!valid || 'Gimmie a time like 10 or 10:30';
    },
  },
];

inquirer.prompt(questions).then((args) => {
  const { date, title, event_type, timezone, time } = args;

  const [day, month, year] = date.split('/');

  const fileName = `${year}-${month}-${day}-${title
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(' ')
    .join('-')}`;

  let outputFile = `./src/schedule/${fileName}.md`;

  // Just some bad handling for existing files. Someone should help out here :)
  if (fs.existsSync(outputFile)) {
    const bananaParty = [...new Array(18)].map((_) => emoji.get('banana')).join('');

    console.log(chalk`
${bananaParty}

{red.bold This is crazy... 
    
but {underline ${outputFile}} already exists... 

so we're slightly modifying the output}

${bananaParty}
      `);
    // This is just for comedy. I'm hoping someone wants to do a better job of this and handle it in the prompts
    outputFile = `${outputFile.replace('.md', '-bananas.md')}`;
  }

  // Naive template alert! We could always use nunjucks or another engine and make this more funner if you want prepopulated formats based on the event_type
  const renderTemplate = (ctx) => `\
---
title: ${ctx.title}
type: ${ctx.event_type}
date: ${ctx.date}
---

  `;

  const [hours, minutes = '00'] = time.split(':');
  const utcStr = `${year}-${month}-${day}T${hours}:${minutes}:00${timeZoneToOffset[timezone]}`;

  const ctx = {
    title,
    event_type,
    date: utcStr,
  };

  fs.writeFileSync(outputFile, renderTemplate(ctx));

  console.log(chalk`
${printEmojiRibbon('clap')}
       {bold.red CONGRATS, YADIDDIT!}
${printEmojiRibbon('clap')}

Now, add some awesome details to it: ${outputFile}

  `);
});
