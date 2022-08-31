/** @jsxImportSource @emotion/react */
import { Routes, Route } from "react-router-dom";
import useRedirectIfNotLoggedIn from "./hooks-providers/use-redirect-to-home";
import styles from "./styles";
import Account from "./units/account";
import Game from "./units/game";
import Landing from "./units/landing";
import Nav from "./units/nav";

const App = () => {
  const redirect = useRedirectIfNotLoggedIn();
  redirect();

  return (
    <div css={styles.layout}>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/account" element={<Account />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
