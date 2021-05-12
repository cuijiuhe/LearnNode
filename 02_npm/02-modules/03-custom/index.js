const _ = require('lodash');

function chunkArr(arr) {
    const teams = _.chunk(arr, 2);
    return teams;
}

module.exports = chunkArr