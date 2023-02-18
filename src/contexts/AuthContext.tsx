import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {AuthContextType, LoginProps, User} from '../@types/authentication';

import { clearToken, getToken, setToken } from '../utils/auth';

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  // TODO this could be async call
  const login = useCallback(
    async ({ email, password }: LoginProps) => {
      // TODO Dummy API call to get token and update user information
      // TODO - setUser
      // TODO - setToken
    },
    [],
  );

  // TODO this could be async call
  const logout = useCallback(async () => {
    clearToken();
    setUser(null);
  }, []);

  // TODO this could be async call
  const initial = useCallback(async () => {
    // TODO - get the token and make a dummy api call to get user information
    // TODO - setUser
    // TODO - setToken
  }, []);

  useEffect(() => {
    initial();
  }, [initial]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
