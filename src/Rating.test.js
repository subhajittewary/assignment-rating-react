import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Rating from "./Rating";

describe("Rating Component", () => {
  test("renders correctly with default props", () => {
    render(<Rating defaultRating={3} totalRating={5} />);
    expect(screen.getByText("Rating Component 😊")).toBeInTheDocument();
    const ratingItems = screen.getAllByRole("button");
    expect(ratingItems.length).toBe(5);

    ratingItems.slice(0, 3).forEach((item) => {
      expect(item).toHaveClass("yellow");
    });
    ratingItems.slice(3).forEach((item) => {
      expect(item).not.toHaveClass("yellow");
    });
  });

  test("changes rating on click", () => {
    render(<Rating defaultRating={3} totalRating={5} />);

    const ratingItems = screen.getAllByRole("button");
    fireEvent.click(ratingItems[4]);
    ratingItems.slice(0, 5).forEach((item) => {
      expect(item).toHaveClass("yellow");
    });
  });

  test("changes rating on hover", () => {
    render(<Rating defaultRating={3} totalRating={5} />);

    const ratingItems = screen.getAllByRole("button");
    fireEvent.mouseEnter(ratingItems[3]);
    ratingItems.slice(0, 4).forEach((item) => {
      expect(item).toHaveClass("yellow");
    });
    ratingItems.slice(4).forEach((item) => {
      expect(item).not.toHaveClass("yellow");
    });
    fireEvent.mouseLeave(ratingItems[3]);
    ratingItems.slice(0, 3).forEach((item) => {
      expect(item).toHaveClass("yellow");
    });
    ratingItems.slice(3).forEach((item) => {
      expect(item).not.toHaveClass("yellow");
    });
  });
});
