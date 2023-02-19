import {render, screen} from "@testing-library/react";
import PublicRoute from "./PublicRoute";
import useAuth from "../hooks/useAuth";

jest.mock("../hooks/useAuth");

describe("PublicRoute", () => {
  it("renders children when user is not authenticated", () => {
    (useAuth as jest.Mock).mockReturnValue({user: null});

    render(
      <PublicRoute>
        <div>Child component</div>
      </PublicRoute>
    );

    expect(screen.getByText("Child component")).toBeInTheDocument();
  });
});