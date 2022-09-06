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

  const makePlants = (props: any) => <Plant key={props.id} {...props} />;

  return (
    <Page title={title} info={info}>
      {plantKeys.map((type: any, index: number) => (
        <div css={rowContainer} key={`${dataSlice}-${type}-${index}`}>
          <h3>{type}</h3>
          <div css={row}>{prop(type, data).map(makePlants)}</div>
        </div>
      ))}
    </Page>
  );
};

export default InteractWithPlants;
