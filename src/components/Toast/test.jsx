import { render, screen } from "@testing-library/react";

import Toast from ".";

describe("<Toast />", () => {
  it("should render the heading", () => {
    const { container } = render(<Toast />);

    expect(
      screen.getByRole("heading", { name: /Toast/i })
    ).toBeInTheDocument();
  });
})
