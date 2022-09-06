/** @jsxImportSource @emotion/react */

import { keys, prop } from "ramda";
import Page from "../../components/game-page";
import userGameData from "../../utils/mocks-plants";
import Plant from "./library.plant-card";
import { libraryStyles } from "./styles";

const { rowContainer, row } = libraryStyles;

const Library = () => {
  const { available } = userGameData;
  const plantKeys = keys(available);

  const makePlants = (props: any) => <Plant key={props.id} {...props} />;
  const info =
    "this is for plants you've already purchased. add them to your garden from here.";
  return (
    <Page title="Library" info={info}>
      {plantKeys.map((type: any) => (
        <div css={rowContainer}>
          <h3>{type}</h3>
          <div css={row}>{prop(type, available).map(makePlants)}</div>
        </div>
      ))}
    </Page>
  );
};

export default Library;
