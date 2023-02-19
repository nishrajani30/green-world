import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import useAuth from '../hooks/useAuth';

jest.mock('../hooks/useAuth');

describe('PrivateRoute', () => {
  const user = { name: 'John Doe', email: 'johndoe@example.com' };

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ user });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders children when user is logged in', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PrivateRoute>
          <h1>Welcome {user.name}</h1>
        </PrivateRoute>
      </MemoryRouter>
    );

    expect(screen.getByText(`Welcome ${user.name}`)).toBeInTheDocument();
  });
});