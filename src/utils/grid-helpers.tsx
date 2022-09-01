import { MAX_COLUMN, MAX_ROW } from "./constants";

export const createSlots = (num: number) => Array(num).fill("r");

export const createGrid = (Asset: any) => {
  return createSlots(MAX_ROW).map((_: any, xIndex: number) =>
    createSlots(MAX_COLUMN).map((_, yIndex) => (
      <Asset key={`x${xIndex}-y${yIndex}`} />
    ))
  );
};
