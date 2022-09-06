import { createContext, useContext } from "react";

export type gameDataContext = {
  units: number;
  available: any;
  purchasable: any;
  garden: any;
  actions: any;
};

export const GameDataContext = createContext<gameDataContext>({
  units: 0,
  available: {},
  purchasable: {},
  garden: {},
  actions: {},
});

export const useGameData = () => useContext(GameDataContext);
