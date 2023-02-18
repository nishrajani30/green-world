export interface User {
  id: string;
  email: string;
  username: string;
  image: string;
  firstName: string;
  lastName: string;
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
