import { useState } from "react";
import { defaultDailies, generateDaily } from "../../utils/daily-mocks";

export interface IDaily {
  id: string;
  name: string;
  checked: boolean;
  index: number;
}

interface IDailies extends Array<IDaily> {}

interface updates {
  add: any;
  checked: any;
  order: any;
  clearError: any;
}

interface IReturn {
  dailies: IDailies;
  update: updates;
  error: string;
}

const reorder = (
  list: IDailies,
  startIndex: number,
  endIndex: number
): IDailies => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const useDailies = (): IReturn => {
  const [dailies, setDailies] = useState<IDailies>(defaultDailies);
  const [error, setError] = useState<string>("");

  const updateChecked = (index: number) => () => {
    const newDailies = [...dailies];
    newDailies[index].checked = !dailies[index].checked;
    setDailies(newDailies);
  };

  const clearError = () => setError("");

  const add = (event: any) => {
    event.preventDefault();
    if (event.target[0].value === "") {
      setError("please enter a todo title.");
      return;
    }

    clearError();
    setDailies([...dailies, generateDaily(event, dailies)]);
  };

  const updateOrder = (sourceIndex: any, destinationIndex: any) => {
    const reordered = reorder(dailies, sourceIndex, destinationIndex);
    setDailies(reordered);
  };

  return {
    dailies,
    update: {
      add,
      checked: updateChecked,
      order: updateOrder,
      clearError,
    },
    error,
  };
};

export default useDailies;
