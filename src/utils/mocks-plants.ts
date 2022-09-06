import { v4 as uuidv4 } from "uuid";

const plants = {
  units: 200,
  purchased: {
    tree: [
      {
        id: uuidv4(),
        name: "ash",
        image: "/tree/#tree-id",
        cost: 100,
      },
    ],
    flower: [
      {
        id: uuidv4(),
        name: "daisy",
        image: "/flower/#flower-id",
        cost: 100,
      },
      {
        id: uuidv4(),
        name: "rose",
        image: "/flower/#flower-id",
        cost: 100,
      },
      {
        id: uuidv4(),
        name: "mugwort",
        image: "/flower/#flower-id",
        cost: 100,
      },
    ],
    shrub: [
      {
        id: uuidv4(),
        name: "hibiscus",
        image: "/flower/#flower-id",
        cost: 100,
      },
      {
        id: uuidv4(),
        name: "pine",
        image: "/flower/#flower-id",
        cost: 100,
      },
    ],
  },
};

export default plants;
