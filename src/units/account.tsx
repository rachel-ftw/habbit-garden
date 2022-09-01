import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/button";

const Account = () => {
  const { user, logout } = useAuth0();

  return (
    <div>
      <h1>Account Page</h1>
      <Button text="logout" onClick={logout} />
      {user !== undefined && (
        <>
          <p>email: {user.email}</p>
          <img src={user.picture} />
        </>
      )}
    </div>
  );
};

export default Account;
