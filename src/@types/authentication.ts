export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export type AuthContextType = {
  user: User | null;
  login: (loginProps: LoginProps) => Promise<unknown>;
  logout: () => void;
};
