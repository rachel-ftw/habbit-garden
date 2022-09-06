/** @jsxImportSource @emotion/react */

import { Routes, Route } from "react-router-dom";
import {
  isComputer,
  ScreenDimensionsContext,
} from "./hooks-providers/provider.dimensions";
import { GameDataContext } from "./hooks-providers/provider.game-data";
import useDimensions from "./hooks-providers/use-dimensions";
import useGameData from "./hooks-providers/use-game-data";
import useRedirectIfNotLoggedIn from "./hooks-providers/use-redirect-if-not-logged-in";
import styles from "./styles";
import Account from "./units/account";
import Game from "./units/game";
import Landing from "./units/landing";
import Nav from "./units/nav";

const App = () => {
  const dims = useDimensions();
  const gameData = useGameData();
  const redirectHomeIfNotLoggedIn = useRedirectIfNotLoggedIn();

  redirectHomeIfNotLoggedIn();

  return (
    <ScreenDimensionsContext.Provider value={dims}>
      <GameDataContext.Provider value={gameData}>
        <div css={styles.layout(isComputer(dims.viewType))}>
          <Nav />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/account" element={<Account />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </GameDataContext.Provider>
    </ScreenDimensionsContext.Provider>
  );
};

export default App;
