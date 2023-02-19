import axiosInstance from "./base";
import { login } from "./login";

jest.mock("./base");

describe("login", () => {
  it("should call axiosInstance.post with correct data", () => {
    const username = "testuser@example.com";
    const password = "testpassword";
    const usernameWithoutDomain = "testuser";
    const expectedData = {
      username: usernameWithoutDomain,
      password,
    };

    login(username, password);

    expect(axiosInstance.post).toHaveBeenCalledWith("/auth/login", expectedData);
  });
});