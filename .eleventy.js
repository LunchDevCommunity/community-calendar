const markdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');

const { isAfter, isBefore, isToday } = require('date-fns');

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
    // We include `isToday` assuming that a daily build job is ran at 12:01am,
    // and we're okay with a daily event potentially showing even if it's in the past
    // _(until 12:00:59am of the next day)_
    return collectionApi
      .getFilteredByGlob('./src/schedule/*.md')
      .filter((event) => isAfter(new Date(event.data.date), new Date()) || isToday(new Date(event.data.date)));
  });

  let markdown = markdownIt({
    typographer: true,
    html: true,
  });

  markdown.use(emoji);

  eleventyConfig.setLibrary('md', markdown);

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/css');

  return {
    dir: {
      input: './src/',
    },
  };
};
