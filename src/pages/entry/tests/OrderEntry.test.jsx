import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { OrderEntry } from "../OrderEntry";

test("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (_, response, context) => {
      return response(context.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (_, response, context) => {
      return response(context.status(500));
    })
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alertElements = await screen.findAllByRole("alert", {
      name: "An unexpected error ocured. Please try again later.",
    });

    expect(alertElements).toHaveLength(2);
  });
});
