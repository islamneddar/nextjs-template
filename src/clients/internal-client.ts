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
}

export const internalApi = InternalApiClient.getInstance();
