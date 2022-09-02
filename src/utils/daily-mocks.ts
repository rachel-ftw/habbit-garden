import { v4 as uuidv4 } from "uuid";

export const prependDaily = (e: any) => {
  return generateDaily(e?.target[0]?.value, 0);
};

export const generateDaily = (name: string, index: number) => ({
  id: uuidv4(),
  name,
  checked: false,
  index,
});

const todos = [
  "brush your teeth",
  "make the bed",
  "go for a walk",
  "walk the dog",
  "do the dishes",
  "exercise",
  "meditate for 5 min",
  "read for 15 minutes",
  "journal for 10 minutes",
  "tidy for 10 minutes",
  "shower",
  "wash your face",
  "play with the kids",
  "draw a picture",
  "go hiking",
];

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const defaultDailies = (num: number) => {
  return Array(num)
    .fill("r")
    .map((_, index) => {
      return generateDaily(todos[getRandomInt(todos.length)], index);
    });
};
