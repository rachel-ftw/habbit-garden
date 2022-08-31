/** @jsxImportSource @emotion/react */
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import AuthenticateButton from "./auth-buttons";
import styles from "./nav.styles";

const Nav = () => {
  const { user } = useAuth0();

  return (
    <div css={styles.container}>
      <Link to="/">Habit Garden</Link>
      <div>
        {user && <Link to="/account">Account</Link>}
        <AuthenticateButton />
      </div>
    </div>
  );
};

export default Nav;
