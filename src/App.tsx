/** @jsxImportSource @emotion/react */
import Dailies from "./units/dailies";
import Garden from "./units/garden";
import Nav from "./units/nav";
import styles from "./styles";

const App = () => {
  return (
    <div css={styles.layout}>
      <Nav />
      <Dailies />
      <Garden />
    </div>
  );
};

export default App;
