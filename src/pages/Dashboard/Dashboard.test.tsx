import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './index';
import userEvent from "@testing-library/user-event";
import queries from "../../data/dashboard/queries";

jest.mock('./useDashboard', () => ({
  __esModule: true,
  default: () => ({
    user: { username: 'test user', image: 'test image' },
    onLogout: jest.fn(),
    handleCloseUserMenu: jest.fn(),
    handleOpenUserMenu: jest.fn(),
    anchorElUser: null,
    handleQuestion: jest.fn(),
    handleClose: jest.fn(),
    open: false,
    answer: ''
  })
}));

describe('Dashboard', () => {
  test('renders logo and app name', () => {
    render(<Dashboard />);
    const appName = screen.getByText('Green World');
    expect(appName).toBeInTheDocument();
  });

  test('renders user menu', () => {
    render(<Dashboard />);
    const avatarButton = screen.getByTestId('user-avatar');
    expect(avatarButton).toBeInTheDocument();
    userEvent.click(avatarButton);
    const profileMenuItem = screen.getByText('Profile');
    const accountMenuItem = screen.getByText('Account');
    const dashboardMenuItem = screen.getByText('Dashboard');
    const logoutMenuItem = screen.getByText('Logout');
    expect(profileMenuItem).toBeInTheDocument();
    expect(accountMenuItem).toBeInTheDocument();
    expect(dashboardMenuItem).toBeInTheDocument();
    expect(logoutMenuItem).toBeInTheDocument();
  });

  test('renders questions list', () => {
    render(<Dashboard />);
    const questions = screen.getAllByTestId('question');
    expect(questions?.length).toBe(queries.length);
  });
});