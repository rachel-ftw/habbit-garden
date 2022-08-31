/** @jsxImportSource @emotion/react */
import styles from "./styles";
import { Link } from "react-router-dom";

const Nav = () => (
  <div css={styles.container}>
    <Link to="/">Habit Garden</Link>
    <Link to="/authentication">login</Link>
    <Link to="/account">Account</Link>
  </div>
);

export default Nav;
