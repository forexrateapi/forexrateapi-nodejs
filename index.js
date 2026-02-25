(function() {
  const axios = require('axios');

  const SERVERS = {
    us: 'https://api.forexrateapi.com/v1',
    eu: 'https://api-eu.forexrateapi.com/v1'
  };

  var apiKey;
  var baseUrl = SERVERS.us;

  function removeEmpty(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
        delete obj[propName];
      }
    }
    return obj;
  }

  exports.setAPIKey = function(apiKey) {
    this.apiKey = apiKey;
  };

  exports.setServer = function(server) {
    baseUrl = SERVERS[server] || SERVERS.us;
  };

  exports.fetchSymbols = function() {
    return axios({
      url: `${baseUrl}/symbols`,
      params: {
        api_key: this.apiKey,
      },
    });
  };

  exports.fetchLive = function(base, currencies, math) {
    return axios({
      url: `${baseUrl}/latest`,
      params: removeEmpty({
        api_key: this.apiKey,
        base: base,
        currencies: (currencies || []).join(','),
        math: math,
      }),
    });
  };

  exports.fetchHistorical = function(date, base, currencies) {
    return axios({
      url: `${baseUrl}/${date}`,
      params: removeEmpty({
        api_key: this.apiKey,
        base: base,
        currencies: (currencies || []).join(','),
      }),
    });
  };

  exports.hourly = function(base, currency, startDate, endDate, math, dateType) {
    return axios({
      url: `${baseUrl}/hourly`,
      params: removeEmpty({
        api_key: this.apiKey,
        base: base,
        currency: currency,
        start_date: startDate,
        end_date: endDate,
        math: math,
        date_type: dateType,
      }),
    });
  };

  exports.ohlc = function(base, currency, date, dateType) {
    return axios({
      url: `${baseUrl}/ohlc`,
      params: removeEmpty({
        api_key: this.apiKey,
        base: base,
        currency: currency,
        date: date,
        date_type: dateType,
      }),
    });
  }

  exports.convert = function(from, to, amount, date) {
    return axios({
      url: `${baseUrl}/convert`,
      params: removeEmpty({
        api_key: this.apiKey,
        from: from,
        to: to,
        amount: amount,
        date: date,
      }),
    });
  };

  exports.timeframe = function(startDate, endDate, base, currencies) {
    return axios({
      url: `${baseUrl}/timeframe`,
      params: removeEmpty({
        api_key: this.apiKey,
        start_date: startDate,
        end_date: endDate,
        base: base,
        currencies: (currencies || []).join(','),
      }),
    });
  };

  exports.change = function(startDate, endDate, base, currencies, dateType) {
    return axios({
      url: `${baseUrl}/change`,
      params: removeEmpty({
        api_key: this.apiKey,
        start_date: startDate,
        end_date: endDate,
        base: base,
        currencies: (currencies || []).join(','),
        date_type: dateType,
      }),
    });
  }

  exports.usage = function() {
    return axios({
      url: `${baseUrl}/usage`,
      params: removeEmpty({
        api_key: this.apiKey,
      }),
    });
  }
})();
