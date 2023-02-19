import React from 'react';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './index';
import {AuthProvider} from "../../../contexts/AuthContext";

describe('Login component', () => {
  test('renders login form', () => {
    render(<AuthProvider><MemoryRouter><Login/></MemoryRouter></AuthProvider>);
    const loginForm = screen.getByTestId('login-form');
    expect(loginForm).toBeInTheDocument();
  });

  test('renders side bar', () => {
    render(<AuthProvider><MemoryRouter><Login/></MemoryRouter></AuthProvider>);
    const sideBar = screen.getByTestId('side-bar');
    expect(sideBar).toBeInTheDocument();
  });
});