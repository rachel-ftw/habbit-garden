const base_daily_units = 100;

export const determineUnits = (cost?: number) =>
  cost === undefined ? base_daily_units : cost;

export const subtract = (total: number, itemCost?: number) =>
  total - determineUnits(itemCost);

export const add = (total: number, itemCost?: number) =>
  total + determineUnits(itemCost);
