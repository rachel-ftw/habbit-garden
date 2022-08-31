import { useState } from "react";

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

const defaultDailies = [
  { id: "123", name: "make your bed", checked: true, index: 0 },
  { id: "234", name: "brush your teeth", checked: false, index: 1 },
];

const useDailies = (): IReturn => {
  const [dailies, setDailies] = useState<IDailies>(defaultDailies);
  const [error, setError] = useState<string>("");

  const generateDaily = (e: any) => ({
    id: dailies[dailies.length - 1].id + 1,
    name: e.target[0].value,
    checked: false,
    index: dailies.length,
  });

  const updateChecked = (index: number) => () => {
    const newDailies = [...dailies];
    newDailies[index].checked = !dailies[index].checked;
    console.log(newDailies);
    setDailies(newDailies);
  };

  const add = (event: any) => {
    event.preventDefault();
    if (event.target[0].value === "") {
      setError("please enter a todo title.");
      return;
    }

    setError("");
    setDailies([...dailies, generateDaily(event)]);
  };

  const updateOrder = (sourceIndex: any, destinationIndex: any) => {
    const reordered = reorder(dailies, sourceIndex, destinationIndex);
    console.log("movingDaily", { sourceIndex, destinationIndex, reordered });
    setDailies(reordered);
  };

  return {
    dailies,
    update: {
      add,
      checked: updateChecked,
      order: updateOrder,
    },
    error,
  };
};

export default useDailies;
