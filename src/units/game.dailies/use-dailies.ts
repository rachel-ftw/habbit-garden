import { useEffect, useState } from "react";
import { useGameData } from "../../hooks-providers/provider.game-data";
import useFetch from "../../hooks-providers/use-fetch";
import { textInputInvalid } from "../../utils/text-input-invalid";

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
  text: any;
  clearError: any;
}

interface IReturn {
  dailies: IDailies;
  update: updates;
  error: string;
}

const useDailies = (): IReturn => {
  const gameData = useGameData();
  const { fetchData } = useFetch();
  const [dailies, setDailies] = useState<any>();
  const [error, setError] = useState<string>("");

  const manageData = (path: string) => fetchData(path, setDailies);

  useEffect(() => {
    const set = (d: any) => {
      console.log(d);
      setDailies(d);
    };

    fetchData("dailies", set);
  }, []);

  const updateChecked = (index: number) => () => {
    const newDailies = [...dailies];

    gameData.actions.completeDaily(newDailies[index].checked);
    newDailies[index].checked = !dailies[index].checked;

    setDailies(newDailies);
  };

  const updateText = (index: number) => (e: any, text?: string) => {
    e.stopPropagation();
    setError("");

    if (textInputInvalid(text)) {
      setError("please enter a valid daily title");
      return;
    }

    const newDailies = [...dailies];
    newDailies[index].name = text || "";
    setDailies(newDailies);
  };

  const clearError = () => setError("");

  const add = (event: any) => {
    event.preventDefault();
    const addText = event.target[0].value;

    if (textInputInvalid(addText)) {
      setError("please enter a todo title.");
      return;
    }

    clearError();
    manageData(`daily-add?title=${addText}`);
  };

  const updateOrder = (sourceIndex: any, destinationIndex: any) => {
    manageData(
      `daily-reorder?source=${sourceIndex}&destination=${destinationIndex}`
    );
  };

  return {
    dailies,
    update: {
      add,
      checked: updateChecked,
      text: updateText,
      order: updateOrder,
      clearError,
    },
    error,
  };
};

export default useDailies;
