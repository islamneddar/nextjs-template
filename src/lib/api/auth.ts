import { z } from 'zod';

// Validation schema for login
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginInput = z.infer<typeof loginSchema>;

// Mock user data
const MOCK_USER = {
  id: '1',
  email: 'demo@example.com',
  name: 'Demo User',
};

// Mock API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  login: async (data: LoginInput) => {
    // Simulate API delay
    await delay(1000);

    // Mock validation
    if (data.email !== MOCK_USER.email || data.password !== 'password123') {
      throw new Error('Invalid email or password');
    }

    // Mock successful login
    return {
      user: MOCK_USER,
    };
  },
};
