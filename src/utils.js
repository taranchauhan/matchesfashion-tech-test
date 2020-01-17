const axios = require('axios');

exports.fetchJsonFromUrl = async url => {
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
};

exports.formatJson = jsonResponse =>
  jsonResponse.map(({ name, url, priceData, thumbnail }) => ({
    name,
    url,
    price: priceData.value,
    thumbnail
  }));
