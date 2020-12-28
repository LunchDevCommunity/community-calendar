const markdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');

const { isAfter, isBefore } = require('date-fns');

module.exports = (eleventyConfiguration) => {
  eleventyConfiguration.addCollection('events', (collectionApi) => {
    return collectionApi.getFilteredByGlob('./src/schedule/*.md');
  });
  eleventyConfiguration.addCollection('pastEvents', (collectionApi) => {
    return collectionApi
      .getFilteredByGlob('./src/schedule/*.md')
      .filter((event) => isBefore(new Date(event.data.date), new Date()));
  });
  eleventyConfiguration.addCollection('upcomingEvents', (collectionApi) => {
    return collectionApi
      .getFilteredByGlob('./src/schedule/*.md')
      .filter((event) => isAfter(new Date(event.data.date), new Date()));
  });

  let markdown = markdownIt({
    typographer: true,
  });

  markdown.use(emoji);

  eleventyConfiguration.setLibrary('md', markdown);

  return {
    dir: {
      input: './src/',
    },
  };
};
