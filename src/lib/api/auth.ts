import { z } from 'zod';

// Validation schema for login
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Validation schema for registration
export const registerSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

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

  register: async (data: RegisterInput) => {
    // Simulate API delay
    await delay(1000);

    // Mock validation - in real app, check if email already exists
    if (data.email === MOCK_USER.email) {
      throw new Error('Email already exists');
    }

    // Mock successful registration
    return {
      user: {
        id: '2',
        email: data.email,
        name: data.email.split('@')[0], // Just using email prefix as name for mock
      },
    };
  },
};
