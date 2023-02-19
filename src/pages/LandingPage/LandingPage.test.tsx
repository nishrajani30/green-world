import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "./index";
import useLanding from "./useLanding";

jest.mock("./useLanding");

describe("LandingPage component", () => {
  it("renders logo and animated gradient text", () => {
    const mockNavigateToLogin = jest.fn();
    // @ts-ignore
    useLanding.mockReturnValue({ navigateToLogin: mockNavigateToLogin });
    render(<MemoryRouter><LandingPage /></MemoryRouter>);
    const animatedText = screen.getByText(/Green World/i);
    expect(animatedText).toBeInTheDocument();
  });

  it("renders nav items in desktop view", () => {
    const mockNavigateToLogin = jest.fn();
    // @ts-ignore
    useLanding.mockReturnValue({ navigateToLogin: mockNavigateToLogin });
    render(<MemoryRouter><LandingPage /></MemoryRouter>);
    const homeNavItem = screen.getByText(/Home/i);
    const aboutNavItem = screen.getByText(/About/i);
    const contactNavItem = screen.getByText(/Contact/i);
    expect(homeNavItem).toBeInTheDocument();
    expect(aboutNavItem).toBeInTheDocument();
    expect(contactNavItem).toBeInTheDocument();
  });

  it("navigates to login page when login button is clicked", () => {
    const mockNavigateToLogin = jest.fn();
    // @ts-ignore
    useLanding.mockReturnValue({ navigateToLogin: mockNavigateToLogin });
    render(<MemoryRouter><LandingPage /></MemoryRouter>);
    const loginButton = screen.getByText(/Login/i);
    console.log(loginButton)
    fireEvent.click(loginButton);
    expect(mockNavigateToLogin).toHaveBeenCalled();
  });
});