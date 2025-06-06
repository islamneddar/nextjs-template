import { BaseApiClient } from './base-client';

class ExternalApiClient extends BaseApiClient {
  protected baseUrl: string;

  private static instance: ExternalApiClient;

  private constructor() {
    super();
    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error('External API URL is not configured');
    }
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL;
  }

  public static getInstance(): ExternalApiClient {
    if (!ExternalApiClient.instance) {
      ExternalApiClient.instance = new ExternalApiClient();
    }
    return ExternalApiClient.instance;
  }
}

export const externalApi = ExternalApiClient.getInstance();
