import React, {
  createContext,
  ReactNode,
  useCallback, useState,
} from 'react';
import {AuthContextType, LoginProps} from '../@types/authentication';
import {login as loginApi} from '../api/login';

import {clearUser, getUser, updateUser} from '../utils/auth';

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({children}: { children: ReactNode }) => {
  const [user, setUser] = useState(getUser());
  const login = useCallback(
    async ({email, password}: LoginProps) => {
      const {data} = await loginApi(email, password);
      if (data) {
        setUser(data);
        updateUser(data);
      }
    },
    [],
  );

  // this could be async call
  const logout = useCallback(async () => {
    clearUser();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
