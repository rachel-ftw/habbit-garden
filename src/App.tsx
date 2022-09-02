/** @jsxImportSource @emotion/react */

import { Routes, Route } from "react-router-dom";
import {
  isComputer,
  ScreenDimensionsContext,
} from "./hooks-providers/dimensions-provider";
import useDimensions from "./hooks-providers/use-dimensions";
import useRedirectIfNotLoggedIn from "./hooks-providers/use-redirect-to-home";
import styles from "./styles";
import Account from "./units/account";
import Game from "./units/game";
import Landing from "./units/landing";
import Nav from "./units/nav";

const App = () => {
  const redirect = useRedirectIfNotLoggedIn();
  const dims = useDimensions();
  redirect();

  return (
    <ScreenDimensionsContext.Provider value={dims}>
      <div css={styles.layout(isComputer(dims.viewType))}>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/account" element={<Account />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </ScreenDimensionsContext.Provider>
  );
};

export default App;
