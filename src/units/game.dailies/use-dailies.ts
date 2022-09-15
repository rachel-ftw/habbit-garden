import { useState } from "react";
import useFetch from "../../hooks-providers/use-fetch";
import constructQuery from "../../utils/construct-query";
import isNotNil from "../../utils/is-not-nil";
import { isInit } from "../../utils/status";
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
  clearError: any;
  edit: any;
  order: any;
}

interface IReturn {
  dailies: IDailies;
  update: updates;
  error: string;
}

const useDailies = (): IReturn => {
  const { fetchData, status } = useFetch();
  const [dailies, setDailies] = useState<any>();
  const [error, setError] = useState<string>("");

  const evaluateForErrors = evaluateFor(setError);
  const clearError = () => setError("");
  const manageData = (path: string) => fetchData(path, setDailies);

  if (isInit(status)) manageData("dailies");

  const edit = (index: number) => (props: any) => {
    evaluateForErrors(props);
    manageData(`daily-edit${constructQuery({ ...props, index })}`);
  };

  const add = (text: string) => {
    evaluateForErrors({ text });
    manageData(`daily-add${constructQuery({ title: text })}`);
  };

  const updateOrder = (source: any, destination: any) => {
    manageData(`daily-reorder${constructQuery({ source, destination })}`);
  };

  return {
    dailies,
    update: {
      add,
      edit,
      order: updateOrder,
      clearError,
    },
    error,
  };
};

export default useDailies;

// // // // // local utils

const evaluateFor = (setError: any) => (props: any) => {
  setError("");

  if (isNotNil(props.text) && textInputInvalid(props.text)) {
    setError("please enter a valid daily title");
    return;
  }
};
