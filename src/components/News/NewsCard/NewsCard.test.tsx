import React from "react";
import { render, screen } from "@testing-library/react";
import NewsCard from "./NewsCard";

const mockBgColor = "mock-bg";
const mockNewHeading = "mock-heading";
const mockContent = "mock-content";
const mockLearnMorePath = "mock-path";

describe("the new <NewsCard /> component", function () {
  it("Should render the component correctly", function () {
    render(
      <NewsCard
        bgColor={mockBgColor}
        newHeading={mockNewHeading}
        content={mockContent}
        learnMorePath={mockLearnMorePath}
      />
    );

    const learMoreLinkElement = screen.getByText(/read more/i);
    expect(learMoreLinkElement).toBeInTheDocument();
  });
});
