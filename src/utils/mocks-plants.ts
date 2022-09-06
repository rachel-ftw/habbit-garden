import { v4 as uuidv4 } from "uuid";
import getRandomInt from "./get-random-int";

const trees = [
  { name: "ash", cost: 1200 },
  { name: "willow", cost: 457 },
  { name: "maple", cost: 500 },
  { name: "hardwood", cost: 457 },
  { name: "pine", cost: 567 },
];

const flowers = [
  { name: "daisy", cost: 50 },
  { name: "rose", cost: 200 },
  { name: "mugwort", cost: 35 },
  { name: "camomile", cost: 39 },
  { name: "lavender", cost: 79 },
];

const shrubs = [
  { name: "pine", cost: 100 },
  { name: "hibiscus", cost: 200 },
  { name: "holly", cost: 300 },
  { name: "blackberry", cost: 400 },
  { name: "grape", cost: 500 },
];

const generatePlant = ({ name, cost }: any) => ({
  id: uuidv4(),
  name,
  cost,
  image: "some shit",
});

enum PlantTypes {
  shrubs,
  flowers,
  trees,
}

export const generatePlants = (type: PlantTypes) => {
  const mocks = {
    [PlantTypes.shrubs]: shrubs,
    [PlantTypes.flowers]: flowers,
    [PlantTypes.trees]: trees,
  };

  const availablePlants = mocks[type];
  const makeNum = () => getRandomInt(availablePlants.length) || 1;

  return Array(makeNum())
    .fill("r")
    .map((_, index) => generatePlant(availablePlants[makeNum()]));
};

const plants = {
  units: 20000,
  available: {
    tree: generatePlants(PlantTypes.trees),
    flower: generatePlants(PlantTypes.flowers),
    shrub: generatePlants(PlantTypes.shrubs),
  },
};

export default plants;
