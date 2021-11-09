import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (_, response, context) => {
    const scoops = [
      {
        name: "Chocolate",
        imagePath: "/images/chocolate.png",
      },
      {
        name: "Vanilla",
        imagePath: "/images/vanilla.png",
      },
    ];

    return response(context.json(scoops));
  }),

  rest.get("http://localhost:3030/toppings", (_, response, context) => {
    const toppings = [
      {
        name: "Cherries",
        imagePath: "/images/cherries.png",
      },
      {
        name: "M&Ms",
        imagePath: "/images/m-and-ms.png",
      },
      {
        name: "Hot fudge",
        imagePath: "/images/hot-fudge.png",
      },
    ];

    return response(context.json(toppings));
  }),
];
