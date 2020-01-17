const axios = require('axios');

/* Returns GET response from URL as JSON
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

/* Format the JSON response in the array of objects
 * @param {Array<Object>} jsonResponse
 * @returns {Array<Object>}
 */
exports.formatJson = jsonResponse =>
  jsonResponse.map(({ name, url, priceData, thumbnail }) => ({
    name,
    url,
    price: priceData.value,
    thumbnail
  }));
