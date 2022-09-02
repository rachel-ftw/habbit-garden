import { createContext, useContext } from "react";

export enum Types {
  computer = "computer",
  tablet = "tablet",
  phone = "phone",
}

export const isPone = (type: Types) => type === Types.phone;
export const isTablet = (type: Types) => type === Types.tablet;
export const isComputer = (type: Types) => type === Types.computer;

export type dimensionsContext = {
  width: number;
  height: number;
  viewType: Types;
};

export const ScreenDimensionsContext = createContext<dimensionsContext>({
  width: 0,
  height: 0,
  viewType: Types.computer,
});

export const useScreenDimensions = () => useContext(ScreenDimensionsContext);
