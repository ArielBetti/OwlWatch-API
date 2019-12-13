const axios = require('axios');

const ebay = axios.create({
    baseURL: 'https://svcs.ebay.com/services/search/FindingService',
});

module.exports = ebay;