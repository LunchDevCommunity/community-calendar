const emoji = require('node-emoji');

module.exports = (type = 'banana', count = 18) => [...new Array(count)].map((_) => emoji.get(type)).join('');
