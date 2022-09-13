import { useEffect, useState } from "react";
import { useGameData } from "../../hooks-providers/provider.game-data";
import useFetch from "../../hooks-providers/use-fetch";
import { prependDaily } from "../../utils/mocks-dailies";
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
  const gameData = useGameData();
  const { fetchData } = useFetch();
  const [dailies, setDailies] = useState<any>();
  const [error, setError] = useState<string>("");

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
    setDailies([prependDaily(event), ...dailies]);
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
      text: updateText,
      order: updateOrder,
      clearError,
    },
    error,
  };
};

export default useDailies;
