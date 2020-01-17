const axios = require('axios');

/* Returns the GET response from the URL as an Object.
 * Axios auto transforms the JSON response to an Object.
 * @param {string} url
 * @returns {Promise<Array<Object>>}
 */
exports.fetchJsonFromUrl = async url => {
  try {
    const { data } = await axios.get(url);
    return typeof data === 'object' ? data : [];
  } catch (err) {
    return [];
  }
};

/* Returns a formatted Array of Objects with the specified keys only.
 * @param {Array<Object>} jsonResponse
 * @returns {Array<Object>}
 */
exports.formatJson = jsonResponse =>
  jsonResponse.map(({ name, url, priceData: { value: price }, thumbnail }) => ({
    name,
    url,
    price,
    thumbnail
  }));
