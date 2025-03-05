import { Game, AutomationTask, ChatMessage } from '@/types';

// Base API URL - will come from environment variables in production
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Basic fetch wrapper with error handling
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

// API functions
export async function getGames(): Promise<Game[]> {
  return fetchAPI<Game[]>('/games');
}

export async function submitChatMessage(message: Omit<ChatMessage, 'id' | 'timestamp'>): Promise<ChatMessage> {
  return fetchAPI<ChatMessage>('/chat', {
    method: 'POST',
    body: JSON.stringify(message),
  });
}

export async function getTasks(): Promise<AutomationTask[]> {
  return fetchAPI<AutomationTask[]>('/tasks');
}

// Add more API functions as needed