import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isLoading, error, user, isAuthenticated, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Oops... {error.message}</div>;
  if (isAuthenticated) return <div>do you want to log out??</div>;

  return (
    <div>
      {!isLoading && user && <button onClick={logout}>log out</button>}
      {!isLoading && !user && (
        <button onClick={loginWithRedirect}>log in</button>
      )}
    </div>
  );
};

export default Login;
