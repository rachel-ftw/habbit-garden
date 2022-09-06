import { useState } from "react";
import userGameData from "../utils/mocks-plants";

const base_daily_units = 100;

const useGameData = () => {
  const [unitsTotal, setUnitsTotal] = useState<number>(userGameData.units);
  const [purchasable, setPurchasable] = useState(userGameData.purchasable);
  const [available, setAvailable] = useState(userGameData.available);

  const completeDaily = (checked: boolean) => {
    const newTotal = checked ? unitsTotal - 100 : unitsTotal + 100;
    setUnitsTotal(newTotal);
  };

  return {
    units: unitsTotal,
    purchasable,
    available,
    actions: {
      completeDaily,
    },
  };
};

export default useGameData;
