const axios = require('axios');

exports.fetchJsonFromUrl = async url => {
  try {
    const { data } = await axios.get(url);
    return typeof data === 'object' ? data : [];
  } catch (err) {
    return [];
  }
};

exports.formatJson = jsonResponse =>
  jsonResponse.map(({ name, url, priceData, thumbnail }) => ({
    name,
    url,
    price: priceData.value,
    thumbnail
  }));
