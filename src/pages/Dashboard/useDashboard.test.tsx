import {render, screen, fireEvent} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import useDashboard from "./useDashboard";
import {AuthProvider} from "../../contexts/AuthContext";
import useAuth from "../../hooks/useAuth";
import queries from "../../data/dashboard/queries";

jest.mock("../../hooks/useAuth");

const TestComponent = () => {
  const {
    user,
    handleOpenUserMenu,
    handleCloseUserMenu,
    onLogout,
    open,
    handleClose,
    answer,
    handleQuestion,
  } = useDashboard();

  return (
    <div>
      <div>{user?.username}</div>
      <button onClick={handleOpenUserMenu}>Open menu</button>
      <button onClick={handleCloseUserMenu}>Close menu</button>
      <button onClick={onLogout}>Logout</button>
      <button onClick={() => handleQuestion(1)}>{queries?.[0]?.question}</button>
      {open && (
        <div>
          <p>{answer}</p>
          <button onClick={handleClose}>Close answer</button>
        </div>
      )}
    </div>
  );
};

describe("useDashboard", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("renders user data correctly", () => {
    const username = "John Doe";
    const mockUser = {username: username};
    // @ts-ignore
    useAuth.mockReturnValue({user: mockUser});
    render(
      <AuthProvider>
        <MemoryRouter>
          <TestComponent/>
        </MemoryRouter>
      </AuthProvider>
    );
    const userData = screen.getByText(username);
    expect(userData).toBeInTheDocument();
  });

  test("opens and closes user menu", () => {
    const username = "John Doe";
    const mockUser = {username: username};
    // @ts-ignore
    useAuth.mockReturnValue({user: mockUser});
    render(
      <AuthProvider>
        <MemoryRouter>
          <TestComponent/>
        </MemoryRouter>
      </AuthProvider>
    );
    const openButton = screen.getByText("Open menu");
    fireEvent.click(openButton);

    const closeButton = screen.getByText("Close menu");
    fireEvent.click(closeButton);
  });

  test("logs out user", async () => {
    const username = "John Doe";
    const mockUser = {username: username};
    const mockLogout = jest.fn();
    // @ts-ignore
    useAuth.mockReturnValue({user: mockUser, logout: mockLogout});
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <AuthProvider>
        <MemoryRouter>
          <TestComponent/>
        </MemoryRouter>
      </AuthProvider>
    );

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalled();
  });

  test("displays answer when question is clicked", () => {
    const username = "John Doe";
    const mockUser = {username: username};
    // @ts-ignore
    useAuth.mockReturnValue({user: mockUser});

    render(
      <AuthProvider>
        <MemoryRouter>
          <TestComponent/>
        </MemoryRouter>
      </AuthProvider>
    );

    const questionButton = screen.getByText(queries?.[0].question);
    fireEvent.click(questionButton);
    const answerText = screen.getByText(queries?.[0].solution);
    expect(answerText).toBeInTheDocument();

    const closeButton = screen.getByText("Close answer");
    fireEvent.click(closeButton);
    expect(answerText).not.toBeInTheDocument();
  });
});