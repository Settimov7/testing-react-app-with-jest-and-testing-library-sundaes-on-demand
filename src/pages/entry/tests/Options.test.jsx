import { render, screen } from "@testing-library/react";

import { Options } from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImageElements = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });

  expect(scoopImageElements).toHaveLength(2);

  const altTexts = scoopImageElements.map(({ alt }) => alt);

  expect(altTexts).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  const toppingImageElements = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  expect(toppingImageElements).toHaveLength(3);

  const altTexts = toppingImageElements.map(({ alt }) => alt);

  expect(altTexts).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
