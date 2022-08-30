import { useState } from "react";

export interface IDaily {
  id: number;
  name: string;
  checked: boolean;
  onClick?: any;
}

interface IDailies extends Array<IDaily> {}

interface IReturn {
  dailies: IDailies;
  addDaily: React.MouseEventHandler<HTMLButtonElement>;
  toggleDaily: any; //update to curried function
}

const defaultDailies = [
  { id: 1, name: "make your bed", checked: true },
  { id: 2, name: "brush your teeth", checked: false },
];

const useDailies = (): IReturn => {
  const [dailies, setDailies] = useState<IDailies>(defaultDailies);

  const toggleDaily =
    (index: number) => (event: React.MouseEventHandler<HTMLButtonElement>) => {
      const newDailies = [...dailies];
      newDailies[index].checked = !dailies[index].checked;
      setDailies(newDailies);
    };

  const addDaily = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    // const button: HTMLButtonElement = event.currentTarget;
    console.log("adding daily");
  };

  return { dailies, addDaily, toggleDaily };
};

export default useDailies;
