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
