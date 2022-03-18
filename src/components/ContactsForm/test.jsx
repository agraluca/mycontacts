import { render, screen } from "@testing-library/react";

import ContactsForm from ".";

describe("<ContactsForm />", () => {
  it("should render the heading", () => {
    const { container } = render(<ContactsForm />);

    expect(
      screen.getByRole("heading", { name: /ContactsForm/i })
    ).toBeInTheDocument();
  });
})
