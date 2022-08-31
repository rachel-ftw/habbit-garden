/** @jsxImportSource @emotion/react */
import { Routes, Route } from "react-router-dom";
import Dailies from "./units/dailies";
import Garden from "./units/garden";
import Nav from "./units/nav";
import styles from "./styles";
import Account from "./units/account";

const Landing = () => (
  <>
    <Dailies />
    <Garden />
  </>
);

const App = () => {
  return (
    <div css={styles.layout}>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
