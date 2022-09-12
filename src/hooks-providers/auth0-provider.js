import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import checkIfInDev from "../utils/check-if-in-dev";

const Auth0ProviderWithNavigation = ({ children }) => {
  const navigate = useNavigate();
  const onRedirectCallback = () => navigate("/game");

  const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const isDevEnv = checkIfInDev(process.env.NODE_ENV);
  const netlifyHostUrl = process.env.REACT_APP_NETLIFY_URL;
  const localHostUrl = "http://localhost:8888/";

  const redirectUri = isDevEnv ? localHostUrl : netlifyHostUrl;

  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigation;
