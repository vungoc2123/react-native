export const API_URL = 'https://gateway-sch.solidtech.vn'; // DEV

export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;
  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL,
  timeout: 60 * 1000,
};
