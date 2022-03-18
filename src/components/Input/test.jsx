import { render, screen } from "@testing-library/react";

import InputSearch from ".";

describe("<InputSearch />", () => {
  it("should render the heading", () => {
    const { container } = render(<InputSearch />);

    expect(
      screen.getByRole("heading", { name: /InputSearch/i })
    ).toBeInTheDocument();
  });
})
