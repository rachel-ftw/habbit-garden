/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { isNil, keys } from "ramda";
import Page from "../../components/game-page";
import { useGameData } from "../../hooks-providers/provider.game-data";
import Scene from "./scene";

const styles = css`
  display: flex;
  flex-direction: row;
`;

const BSShowingPlants = ({ garden }: any) => {
  return (
    <div>
      <p>available plants:</p>
      {keys(garden).map((type: any) => {
        if (isNil(garden[type])) return null;
        return (
          <>
            <h3>{type}</h3>
            <ul>
              {keys(garden[type]).map((id: any) => (
                <li>{garden[type][id].name}</li>
              ))}
            </ul>
          </>
        );
      })}
    </div>
  );
};

const Garden = () => {
  const { garden } = useGameData();

  return (
    <Page title="Garden">
      <div css={styles}>
        <Scene />
        <BSShowingPlants garden={garden} />
      </div>
    </Page>
  );
};

export default Garden;
