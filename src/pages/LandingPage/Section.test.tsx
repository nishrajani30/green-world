import React from "react";
import {render, screen} from "@testing-library/react";
import Section from "./Section";
import {ImageDirection, SectionType} from "../../@types/landing";

describe("Section component", () => {
  const props: SectionType = {
    title: "Test Title",
    image: "test.png",
    subTitle: "Test Subtitle",
    imageDirection: ImageDirection.LEFT,
  };

  it("renders the title", () => {
    render(<Section {...props} />);
    const title = screen.getByText(props.title);
    expect(title).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Section {...props} />);
    const subTitle = screen.getByText(props.subTitle);
    expect(subTitle).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<Section {...props} />);
    const image = screen.getByAltText("landing");
    expect(image).toBeInTheDocument();
  });

  it("renders the image on the left if the imageDirection prop is 'left'", () => {
    render(<Section {...props} />);
    const imageContainer = screen.getByTestId("image-container");
    expect(imageContainer).toHaveStyle({ "flex-direction": "row-reverse" });
  });

  it("renders the image on the right if the imageDirection prop is 'right'", () => {
    const propsWithRightDirection = { ...props, imageDirection: ImageDirection.RIGHT };
    render(<Section {...propsWithRightDirection} />);
    const imageContainer = screen.getByTestId("image-container");
    expect(imageContainer).toHaveStyle({ "flex-direction": "row" });
  });
});