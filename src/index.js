const URL_LIST = require('./config');
const { fetchJsonFromUrl, formatJson } = require('./utils');

/**
 * URLs to fetch:
 * https://pastebin.com/raw/xnU3bRvH
 * https://pastebin.com/raw/StjwkCib
 * https://pastebin.com/raw/RUcap17D
 * https://pastebin.com/raw/fKt6beV2
 * https://pastebin.com/raw/ajRSf4FF
 *
 * The function should return Array only.
 */
async function fetchUrlList() {
  const formattedJsonArray = (
    await Promise.all(URL_LIST.map(url => fetchJsonFromUrl(url)))
  ).map(jsonResponse => formatJson(jsonResponse));

  return [].concat(...formattedJsonArray);
}

/* Run function and print result */
(async () => console.log(await fetchUrlList()))();

module.exports = {
  fetchUrlList
};
