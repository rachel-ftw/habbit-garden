/** @jsxImportSource @emotion/react */

import { useAuth0 } from "@auth0/auth0-react";
import { css } from "@emotion/react";
import Button from "../components/button";

const style = css`
  grid-column: 1 / -1;
`;

const Account = () => {
  const { user, logout } = useAuth0();

  return (
    <div css={style}>
      <h1>Account Page</h1>
      <Button text="logout" onClick={logout} />
      {user !== undefined && (
        <>
          <p>email: {user.email}</p>
          <img src={user.picture} alt="user gravatar" />
        </>
      )}
    </div>
  );
};

export default Account;
