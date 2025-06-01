import { AxiosResponse } from 'axios';

declare module 'forexrateapi' {
  // Base response structure for all API endpoints
  interface BaseResponse {
    success: boolean;
    error?: {
      code: number;
      info: string;
    };
  }

  // Symbols response
  interface SymbolsResponse extends BaseResponse {
    symbols: {
      [currencyCode: string]: string;
    };
  }

  // Live rates response
  interface LiveRatesResponse extends BaseResponse {
    base: string;
    timestamp: number;
    rates: {
      [currencyCode: string]: number;
    };
  }

  // Historical rates response (same structure as live rates)
  interface HistoricalRatesResponse extends BaseResponse {
    base: string;
    timestamp: number;
    rates: {
      [currencyCode: string]: number;
    };
  }

  // OHLC response
  interface OHLCResponse extends BaseResponse {
    base: string;
    currency: string;
    timestamp: number;
    ohlc: {
      open: number;
      high: number;
      low: number;
      close: number;
    };
  }

  // Convert response
  interface ConvertResponse extends BaseResponse {
    base: string;
    query: {
      from: string;
      to: string;
      amount: number;
    };
    info: {
      quote: number;
      timestamp: number
    }
    result: number;
  }

  // Timeframe response
  interface TimeframeResponse extends BaseResponse {
    base: string;
    start_date: string;
    end_date: string;
    rates: {
      [date: string]: {
        [currencyCode: string]: number;
      };
    };
  }

  // Change response
  interface ChangeResponse extends BaseResponse {
    base: string;
    start_date: string;
    end_date: string;
    change: {
      [currencyCode: string]: {
        start_rate: number;
        end_rate: number;
        change: number;
        change_pct: number;
      };
    };
  }

  // Usage response
  interface UsageResponse extends BaseResponse {
    result: {
      plan: string;
      used: number;
      total: number;
      remaining: number;
    }
  }

  // Date type options for OHLC endpoint
  type DateType = 'recent' | 'yesterday' | 'week' | 'month' | 'year';

  // Main module interface
  interface ForexRateAPI {
    /**
     * Set the API key for authentication
     * @param apiKey Your ForexRateAPI.com API key
     */
    setAPIKey(apiKey: string): void;

    /**
     * Fetch all supported currency symbols
     * @returns Promise resolving to axios response with symbols data
     */
    fetchSymbols(): Promise<AxiosResponse<SymbolsResponse>>;

    /**
     * Fetch live exchange rates
     * @param base Optional base currency (defaults to USD)
     * @param currencies Optional array of currencies to return rates for
     * @returns Promise resolving to axios response with live rates data
     */
    fetchLive(base?: string, currencies?: string[]): Promise<AxiosResponse<LiveRatesResponse>>;

    /**
     * Fetch historical exchange rates for a specific date
     * @param date Date in YYYY-MM-DD format
     * @param base Optional base currency (defaults to USD)
     * @param currencies Optional array of currencies to return rates for
     * @returns Promise resolving to axios response with historical rates data
     */
    fetchHistorical(date: string, base?: string, currencies?: string[]): Promise<AxiosResponse<HistoricalRatesResponse>>;

    /**
     * Fetch Open, High, Low, Close (OHLC) data for a currency pair
     * @param base Base currency (defaults to USD)
     * @param currency Target currency for OHLC data
     * @param date Date in YYYY-MM-DD format
     * @param dateType Optional date type that overrides the date parameter
     * @returns Promise resolving to axios response with OHLC data
     */
    ohlc(base?: string, currency?: string, date?: string, dateType?: DateType): Promise<AxiosResponse<OHLCResponse>>;

    /**
     * Convert amount from one currency to another
     * @param from Source currency (defaults to USD)
     * @param to Target currency
     * @param amount Amount to convert
     * @param date Optional date for historical conversion (YYYY-MM-DD format)
     * @returns Promise resolving to axios response with conversion data
     */
    convert(from?: string, to?: string, amount?: number, date?: string): Promise<AxiosResponse<ConvertResponse>>;

    /**
     * Get exchange rates for a specific time period
     * @param startDate Start date in YYYY-MM-DD format
     * @param endDate End date in YYYY-MM-DD format
     * @param base Optional base currency (defaults to USD)
     * @param currencies Optional array of currencies to return rates for
     * @returns Promise resolving to axios response with timeframe data
     */
    timeframe(startDate: string, endDate: string, base?: string, currencies?: string[]): Promise<AxiosResponse<TimeframeResponse>>;

    /**
     * Get exchange rate changes between two dates
     * @param startDate Start date in YYYY-MM-DD format
     * @param endDate End date in YYYY-MM-DD format
     * @param base Optional base currency (defaults to USD)
     * @param currencies Optional array of currencies to return changes for
     * @returns Promise resolving to axios response with change data
     */
    change(startDate: string, endDate: string, base?: string, currencies?: string[]): Promise<AxiosResponse<ChangeResponse>>;

    /**
     * Get current API usage statistics
     * @returns Promise resolving to axios response with usage data
     */
    usage(): Promise<AxiosResponse<UsageResponse>>;
  }

  const api: ForexRateAPI;
  export = api;
} 