import { render, screen, fireEvent } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";

test("confirm order button is disabled if checkbox is unchecked", () => {
  render(<SummaryForm />);

  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmOrderButtonElement = screen.getByRole("button", {
    name: /confirm order/i,
  });

  expect(checkboxElement).not.toBeChecked();
  expect(confirmOrderButtonElement).toBeDisabled();
});

test("confirm order button is enabled after click on checkbox and returned back after second click", () => {
  render(<SummaryForm />);

  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmOrderButtonElement = screen.getByRole("button", {
    name: /confirm order/i,
  });

  fireEvent.click(checkboxElement);

  expect(checkboxElement).toBeChecked();
  expect(confirmOrderButtonElement).toBeEnabled();

  fireEvent.click(checkboxElement);

  expect(checkboxElement).not.toBeChecked();
  expect(confirmOrderButtonElement).toBeDisabled();
});
