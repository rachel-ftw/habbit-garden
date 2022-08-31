/** @jsxImportSource @emotion/react */
import styles from "./nav.styles";
import { Link } from "react-router-dom";
import AuthenticateButton from "./auth-buttons";

const Nav = () => (
  <div css={styles.container}>
    <Link to="/">Habit Garden</Link>
    <div>
      <AuthenticateButton />
      <Link to="/account">Account</Link>
    </div>
  </div>
);

export default Nav;
