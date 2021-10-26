import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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

  userEvent.click(checkboxElement);

  expect(checkboxElement).toBeChecked();
  expect(confirmOrderButtonElement).toBeEnabled();

  userEvent.click(checkboxElement);

  expect(checkboxElement).not.toBeChecked();
  expect(confirmOrderButtonElement).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  let popoverElement = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  const termsAndConditionsElement = screen.getByText(/terms and conditions/i);

  expect(popoverElement).not.toBeInTheDocument();

  userEvent.hover(termsAndConditionsElement);

  popoverElement = screen.getByText(/no ice cream will actually be delivered/i);

  expect(popoverElement).toBeInTheDocument();

  userEvent.unhover(termsAndConditionsElement);

  await waitForElementToBeRemoved(() => {
    popoverElement = screen.queryByText(
      /no ice cream will actually be delivered/i
    );

    return popoverElement;
  });

  expect(popoverElement).not.toBeInTheDocument();
});
