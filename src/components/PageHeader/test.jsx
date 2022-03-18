import { render, screen } from "@testing-library/react";

import PageHeader from ".";

describe("<PageHeader />", () => {
  it("should render the heading", () => {
    const { container } = render(<PageHeader />);

    expect(
      screen.getByRole("heading", { name: /PageHeader/i })
    ).toBeInTheDocument();
  });
})
