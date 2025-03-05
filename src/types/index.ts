// Game types
export interface Game {
    id: string;
    name: string;
    platform: string[];
    image: string;
  }
  
  // User types
  export interface User {
    id: string;
    email: string;
    name?: string;
  }
  
  // Task types
  export interface AutomationTask {
    id: string;
    gameId: string;
    status: 'pending' | 'running' | 'completed' | 'failed';
    description: string;
    created: Date;
    scheduled?: Date;
    completedAt?: Date;
  }
  
  // Chat message types
  export interface ChatMessage {
    id: string;
    role: 'user' | 'system';
    content: string;
    timestamp: Date;
    options?: string[];
    expectingTeamSelection?: boolean;
  }