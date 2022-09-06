/** @jsxImportSource @emotion/react */

import { keys, prop } from "ramda";
import Page from "../../components/game-page";
import { useGameData } from "../../hooks-providers/provider.game-data";
import Plant from "./library.plant-card";
import { libraryStyles } from "./styles";

const { rowContainer, row } = libraryStyles;

interface IProps {
  title: string;
  info: string;
  dataSlice: any;
}

const InteractWithPlants = ({ title, info, dataSlice }: IProps) => {
  const gameData = useGameData();
  const data = prop(dataSlice, gameData);
  const plantKeys = keys(data);

  const makePlants = (type: any, plantData: any) => (
    <Plant
      key={`plant-${plantData.id}`}
      type={type}
      origin={title}
      {...plantData}
    />
  );

  return (
    <Page title={title} info={info}>
      {plantKeys.map((type: any, index: number) => {
        const plantData = prop(type, data);
        if (keys(plantData).length === 0) return null;
        return (
          <div css={rowContainer} key={`${dataSlice}-${type}-${index}`}>
            <h3>{type}</h3>
            <div css={row}>
              {keys(plantData).map((key) => makePlants(type, plantData[key]))}
            </div>
          </div>
        );
      })}
    </Page>
  );
};

export default InteractWithPlants;
