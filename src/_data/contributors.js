const fs = require('fs');

const data = fs.readFileSync(`${process.cwd()}/.all-contributorsrc`, 'utf-8');
const { contributors } = JSON.parse(data);
contributors.sort((left, right) => left.name.localeCompare(right.name));

module.exports = contributors;
