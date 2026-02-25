# ForexRateAPI

forexrateapi is the official Node.js wrapper for ForexRateAPI.com. This allows you to quickly integrate our foreign exchange rate API and currency conversion API into your application. Check https://forexrateapi.com documentation for more information.



## Installation

#### NPM

```
$ npm i forexrateapi
```
---
## Usage

```js
const api = require('forexrateapi');

api.setAPIKey('SET_YOUR_API_KEY_HERE');
await api.fetchLive('USD', ['AUD', 'CAD', 'GBP', 'JPY']);
```
---
## Server Regions

ForexRateAPI provides two regional endpoints. Choose the one closest to your servers for optimal performance.

| Region | Base URL |
|--------|----------|
| United States (default) | `https://api.forexrateapi.com/v1` |
| Europe | `https://api-eu.forexrateapi.com/v1` |

```js
api.setAPIKey('SET_YOUR_API_KEY_HERE');

// Default is US server
// Switch to EU server:
api.setServer('eu');
```

---
## Documentation

#### setAPIKey(apiKey)

- `apiKey` <[string]> API Key

In order to use this library, you must first call this function with an API key.

```js
api.setAPIKey('SET_YOUR_API_KEY_HERE');
```
---
#### setServer(server)

- `server` <[string]> Pass `'eu'` to use the EU server (`api-eu.forexrateapi.com`), or `'us'` for the US server. Defaults to US if not specified.

```js
api.setServer('eu');
```

---
#### fetchSymbols()
```js
await api.fetchSymbols();
```

[Link](https://forexrateapi.com/documentation#api_symbol)

---
#### fetchLive(base, currencies, math)

- `base` <[string]> Optional. Pass in a base currency, defaults to USD.
- `currencies` <[Array]<[string]>> Optional. Pass in an array of currencies to return values for.
- `math` <[string]> Optional. Pass in a math expression to apply to the rates.

```js
await api.fetchLive('USD', ['AUD', 'CAD', 'GBP', 'JPY']);
```

[Link](https://forexrateapi.com/documentation#api_realtime)

---
#### fetchHistorical(date, base, currencies)

- `date` <[string]> Required. Pass in a string with format `YYYY-MM-DD`
- `base` <[string]> Optional. Pass in a base currency, defaults to USD.
- `currencies` <[Array]<[string]>> Optional. Pass in an array of currencies to return values for.

```js
await api.fetchHistorical('2024-02-05', 'USD', ['AUD', 'CAD', 'GBP', 'JPY']);
```

[Link](https://forexrateapi.com/documentation#api_historical)

---
#### hourly(base, currency, startDate, endDate, math, dateType)

- `base` <[string]> Optional. Pass in a base currency, defaults to USD.
- `currency` <[string]> Required. Specify currency you would like to get hourly rates for.
- `startDate` <[string]> Required. Specify the start date using the format `YYYY-MM-DD`.
- `endDate` <[string]> Required. Specify the end date using the format `YYYY-MM-DD`.
- `math` <[string]> Optional. Pass in a math expression to apply to the rates.
- `dateType` <[string]> Optional. Pass in a date type, overrides date parameters if passed in.

```js
await api.hourly('USD', 'EUR', '2024-02-05', '2024-02-05');
```

[Link](https://forexrateapi.com/documentation#api_hourly)

---
#### ohlc(base, currency, date, dateType)

- `base` <[string]> Optional. Pass in a base currency, defaults to USD.
- `currency` <[string]> Required. Specify currency you would like to get OHLC for.
- `date` <[string]> Required. Specify date to use historical midpoint value for conversion with format `YYYY-MM-DD`. Otherwise, it will use live exchange rate date if value not passed in.
- `dateType` <[string]> Optional. Pass in a date type, overrides date parameter if passed in.

```js
await api.ohlc('USD', 'EUR', '2024-02-05', null);
```

[Link](https://forexrateapi.com/documentation#api_ohlc)

---
#### convert(from, to, amount, date)

- `from` <[string]> Optional. Pass in a base currency, defaults to USD.
- `to` <[string]> Required. Specify currency you would like to convert to.
- `amount` <[number]> Required. The amount to convert.
- `date` <[string]> Optional. Specify date to use historical midpoint value for conversion with format `YYYY-MM-DD`. Otherwise, it will use live exchange rate date if value not passed in.

```js
await api.convert('USD', 'EUR', 100, '2024-02-05');
```

[Link](https://forexrateapi.com/documentation#api_convert)

---
#### timeframe(startDate, endDate, base, currencies)

- `startDate` <[string]> Required. Specify the start date of your timeframe using the format `YYYY-MM-DD`.
- `endDate` <[string]> Required. Specify the end date of your timeframe using the format `YYYY-MM-DD`.
- `base` <[string]> Optional. Pass in a base currency, defaults to USD.
- `currencies` <[Array]<[string]>> Optional. Pass in an array of currencies to return values for.

```js
await api.timeframe('2024-02-05', '2024-02-06', 'USD', ['AUD', 'CAD', 'GBP', 'JPY']);
```

[Link](https://forexrateapi.com/documentation#api_timeframe)

---
#### change(startDate, endDate, base, currencies, dateType)

- `startDate` <[string]> Required. Specify the start date of your timeframe using the format `YYYY-MM-DD`.
- `endDate` <[string]> Required. Specify the end date of your timeframe using the format `YYYY-MM-DD`.
- `base` <[string]> Optional. Pass in a base currency, defaults to USD.
- `currencies` <[Array]<[string]>> Optional. Pass in an array of currencies to return values for.
- `dateType` <[string]> Optional. Pass in a date type, overrides date parameters if passed in.

```js
await api.change('2024-02-05', '2024-02-06', 'USD', ['AUD', 'CAD', 'GBP', 'JPY']);
```

[Link](https://forexrateapi.com/documentation#api_change)

---
#### usage()

```js
await api.usage();
```

[Link](https://forexrateapi.com/documentation#api_usage)

---
**[Official documentation](https://forexrateapi.com/documentation)**


---
## FAQ

- How do I get an API Key?

    Free API Keys are available [here](https://forexrateapi.com).

- I want more information

    Checkout our FAQs [here](https://forexrateapi.com/faq).


## Support

For support, get in touch using [this form](https://forexrateapi.com/contact).


[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 'Array'
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type 'Number'
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type 'String'
