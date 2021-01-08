const markdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');

const { isAfter, isBefore } = require('date-fns');

module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection('events', (collectionApi) => {
    return collectionApi.getFilteredByGlob('./src/schedule/*.md');
  });
  eleventyConfig.addCollection('pastEvents', (collectionApi) => {
    return collectionApi
      .getFilteredByGlob('./src/schedule/*.md')
      .filter((event) => isBefore(new Date(event.data.date), new Date()));
  });
  eleventyConfig.addCollection('upcomingEvents', (collectionApi) => {
    return collectionApi
      .getFilteredByGlob('./src/schedule/*.md')
      .filter((event) => isAfter(new Date(event.data.date), new Date()));
  });

  let markdown = markdownIt({
    typographer: true,
    html: true,
  });

  markdown.use(emoji);

  eleventyConfig.setLibrary('md', markdown);

  eleventyConfig.addPassthroughCopy('src/css');

  return {
    dir: {
      input: './src/',
    },
  };
};
