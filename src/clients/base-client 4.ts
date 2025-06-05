import { API_ERRORS, ApiRequestConfig, ApiResponse, DEFAULT_HEADERS } from '../lib/api/types';

export abstract class BaseApiClient {
  protected abstract baseUrl: string;

  protected async request<T>(
    endpoint: string,
    options: ApiRequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const { params, timeout = 10000, ...fetchOptions } = options;

    try {
      const url = this.buildUrl(endpoint, params);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        headers: {
          ...DEFAULT_HEADERS,
          ...fetchOptions.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return { error: API_ERRORS.TIMEOUT };
        }
        return { error: error.message };
      }
      return { error: API_ERRORS.UNKNOWN };
    }
  }

  protected buildUrl(endpoint: string, params?: Record<string, string>): string {
    const url = new URL(this.baseUrl + endpoint);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    return url.toString();
  }

  public async get<T>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  public async post<T>(
    endpoint: string,
    data?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  public async put<T>(
    endpoint: string,
    data?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  public async delete<T>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }
}
