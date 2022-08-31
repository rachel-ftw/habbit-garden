import { useAuth0 } from "@auth0/auth0-react";

const AuthenticateButton = () => {
  const { isLoading, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Oops... {error.message}</div>;

  if (!isLoading && user) return <button onClick={logout}>log out</button>;
  if (!isLoading && !user) {
    return <button onClick={loginWithRedirect}>log in</button>;
  }
  return null;
};

export default AuthenticateButton;
