import { render, screen } from '@testing-library/react';
import {AuthContext, AuthProvider} from './AuthContext';

describe('Auth Provider', () => {
  it('should render the Auth Provider component', () => {
    render(
      <AuthProvider>
        <div data-testid="auth-wrapper"></div>
      </AuthProvider>
    );
    expect(screen.getByTestId('auth-wrapper')).toBeTruthy();
  });
});

describe('Auth Context', () => {
  it('should create the Auth Context', () => {
    expect(AuthContext).toBeTruthy();
  });
});