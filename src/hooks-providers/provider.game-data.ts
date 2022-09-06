import { createContext, useContext } from "react";

export type gameDataContext = {
  units: number;
  available: any;
  purchasable: any;
};

export const GameDataContext = createContext<gameDataContext>({
  units: 0,
  available: {},
  purchasable: {},
});

export const useGameData = () => useContext(GameDataContext);
