/** @jsxImportSource @emotion/react */
import { Routes, Route } from "react-router-dom";
import Account from "./units/account";
import Game from "./units/game";
import Landing from "./units/landing";
import Nav from "./units/nav";
import Auth0ProviderWithNavigation from "./auth0-provider";
import styles from "./styles";

const App = () => (
  <Auth0ProviderWithNavigation>
    <div css={styles.layout}>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/account" element={<Account />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  </Auth0ProviderWithNavigation>
);

export default App;
