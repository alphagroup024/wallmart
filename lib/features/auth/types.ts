export interface AuthState {
  isAuthenticated: boolean;
  error: string | null;
  user: {
    username: string;
    password: string;
  };
}

export interface RootState {
  auth: AuthState;
} 