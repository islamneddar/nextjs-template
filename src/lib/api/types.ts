// Common types for API responses and requests
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status?: number;
}

export interface ApiRequestConfig extends RequestInit {
  params?: Record<string, string>;
  timeout?: number;
}

// API endpoints configuration
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
  user: {
    profile: '/user/profile',
    settings: '/user/settings',
  },
} as const;

// Default headers for all requests
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
} as const;

// Error messages
export const API_ERRORS = {
  TIMEOUT: 'Request timeout',
  NETWORK: 'Network error',
  UNKNOWN: 'An unknown error occurred',
  INVALID_RESPONSE: 'Invalid response from server',
} as const;
