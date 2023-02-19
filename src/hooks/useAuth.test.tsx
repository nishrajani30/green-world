import {AuthProvider} from '../contexts/AuthContext';
import useAuth from './useAuth';
import {act, renderHook} from "@testing-library/react";
import React from "react";
import {login as loginApi} from '../api/login';

jest.mock('../api/login');

describe('useAuth', () => {
  it('should return user details on login', async () => {
    const {result} = renderHook(() => useAuth(), {
      wrapper: ({children}) => <AuthProvider>{children}</AuthProvider>,
    });
    loginApi.mockResolvedValue({data: {name: 'Test User'}});
    await act(async () => {
      await result.current.login({email: 'test@test.com', password: 'test123'});
    });
    expect(result.current.user).toEqual({name: 'Test User'});
  });

  it('should clear user details on logout', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });
    await act(async () => {
      await result.current.logout();
    });
    expect(result.current.user).toBeNull();
  });
});