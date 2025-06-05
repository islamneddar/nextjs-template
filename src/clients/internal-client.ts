import { ApiResponse } from '../lib/api/types';
import { BaseApiClient } from './base-client';

class InternalApiClient extends BaseApiClient {
  protected baseUrl = '/api';

  private static instance: InternalApiClient;

  private constructor() {
    super();
  }

  public static getInstance(): InternalApiClient {
    if (!InternalApiClient.instance) {
      InternalApiClient.instance = new InternalApiClient();
    }
    return InternalApiClient.instance;
  }

  // Add any internal-specific methods here
  public async validateSession(): Promise<ApiResponse> {
    return this.get('/auth/session');
  }
}

export const internalApi = InternalApiClient.getInstance();
