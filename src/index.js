const axios = require('axios');

const URL_LIST = require('./config');

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
  ).map(jsonResponseArray => formatJson(jsonResponseArray));

  return [].concat(...formattedJsonArray);
}

async function fetchJsonFromUrl(url) {
  try {
    const response = await axios.get(url);
    const { data } = response;

    // Axios automatically converts to JSON, but if invalid it converts to a string
    if (typeof data === 'string') {
      return [];
    }

    return data;
  } catch (err) {
    return [];
  }
}

function formatJson(jsonResponseArray) {
  return jsonResponseArray.map(({ name, url, priceData, thumbnail }) => ({
    name,
    url,
    price: priceData.value,
    thumbnail
  }));
}

(async () => {
  const data = await fetchUrlList();
  console.log(data);
})();

module.exports = {
  fetchUrlList
};
