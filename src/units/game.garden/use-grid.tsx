import { useState } from "react";

const MAX_ROW = 10;
const MAX_COLUMN = 10;

const determineCenter = (v: number) => v / 2 - 1;

const useGrid = () => {
  const [row, setRow] = useState(determineCenter(MAX_ROW));
  const [col, setCol] = useState(determineCenter(MAX_COLUMN));

  const handleClick = (row: any, col: any) => () => {
    setRow(row);
    setCol(col);
  };

  return { row, col, handleClick };
};

export default useGrid;
