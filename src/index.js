const URL_LIST = require('./config');
const { fetchJsonFromUrl, formatJson } = require('./utils');

/* Returns a formatted Array of Objects from each URL in the URL_LIST
 * @returns {Promise<Array<Object>>}
 */
async function fetchUrlList() {
  const formattedJsonArray = (
    await Promise.all(URL_LIST.map(url => fetchJsonFromUrl(url)))
  ).map(jsonResponse => formatJson(jsonResponse));

  /** Flatten array */
  return [].concat(...formattedJsonArray);
}

/* Run the fetchUrlList function and prints the result */
(async () => console.log(await fetchUrlList()))();

module.exports = {
  fetchUrlList
};
