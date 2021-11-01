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
];
