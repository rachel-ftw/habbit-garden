import { useState } from "react";

export interface IDaily {
  id: number;
  name: string;
  checked: boolean;
}

interface IDailies extends Array<IDaily> {}

interface IReturn {
  dailies: IDailies;
  addDaily: any;
  updateDaily: any; //update to curried function
  error: string;
}

const defaultDailies = [
  { id: 1, name: "make your bed", checked: true },
  { id: 2, name: "brush your teeth", checked: false },
];

const useDailies = (): IReturn => {
  const [dailies, setDailies] = useState<IDailies>(defaultDailies);
  const [error, setError] = useState<string>("");

  const generateDaily = (e: any) => ({
    id: dailies[dailies.length - 1].id + 1,
    name: e.target[0].value,
    checked: false,
  });

  const updateDaily = (index: number) => () => {
    const newDailies = [...dailies];
    newDailies[index].checked = !dailies[index].checked;
    setDailies(newDailies);
  };

  const addDaily = (event: any) => {
    event.preventDefault();
    if (event.target[0].value === "") {
      setError("please enter a todo title.");
      return;
    }

    setError("");
    setDailies([...dailies, generateDaily(event)]);
  };

  return { dailies, addDaily, updateDaily, error };
};

export default useDailies;
