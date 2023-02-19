import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders the logo", () => {
    const { container } = render(<Logo />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});