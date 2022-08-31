import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigation = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate("/");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri="http://localhost:3000/"
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigation;
