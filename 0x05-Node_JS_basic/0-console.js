const process = require('process');

const displayMessage = (str) => process.stdout.write(`${str}\n`);

module.exports = displayMessage;
