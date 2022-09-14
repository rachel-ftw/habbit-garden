import { path, prop } from "ramda";
import { useEffect, useState } from "react";
import useFetch from "./use-fetch";
import { add, subtract } from "./use-game-data.helpers";

const useGameData = () => {
  const { fetchData } = useFetch();
  const [unitsTotal, setUnitsTotal] = useState<any>(0);
  const [purchasable, setPurchasable] = useState<any>({});
  const [available, setAvailable] = useState<any>({});
  const [garden, setGarden] = useState<any>({});

  useEffect(() => {
    const setData = (gameData: any) => {
      setUnitsTotal(gameData?.units);
      setPurchasable(gameData?.purchasable);
      setAvailable(gameData?.available);
      setGarden(gameData?.garden);
    };

    fetchData("plants", setData);
  }, [fetchData]);

  const determineSection = (origin: string) => {
    if (origin === "garden") return [garden, setGarden, {}, () => {}];

    if (origin === "store") {
      return [purchasable, setPurchasable, available, setAvailable];
    }
    if (origin === "library") {
      return [available, setAvailable, garden, setGarden];
    }
  };

  const completeDaily = (checked: boolean) => {
    const newTotal = checked ? subtract : add;
    setUnitsTotal(newTotal(unitsTotal));
  };

  const transferPlantAndUpdateTotal = (
    type: any,
    plantId: string,
    origin: string
  ) => {
    // @ts-ignore
    const [fromData, fromSet, toData, toSet] = determineSection(origin);
    const plant = path([type, plantId], fromData);

    const from = prop(type, fromData);
    delete from[plantId];
    fromSet({ ...fromData, [type]: from });

    const to = prop(type, toData);
    // @ts-ignore
    toSet({ ...toData, [type]: { ...to, [plant.id]: { ...plant } } });
    // @ts-ignore
    setUnitsTotal(subtract(unitsTotal, plant.cost));
  };

  return {
    units: unitsTotal,
    purchasable,
    available,
    garden,
    actions: { modifyPlant: transferPlantAndUpdateTotal, completeDaily },
  };
};

export default useGameData;
