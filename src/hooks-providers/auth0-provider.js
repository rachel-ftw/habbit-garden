import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigation = ({ children }) => {
  const navigate = useNavigate();
  const onRedirectCallback = () => navigate("/game");

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const env = process.env.REACT_APP_ENV;
  const netlifyUrl = process.env.REACT_APP_NETLIFY_URL;
  const localHostUrl = "http://localhost:3000/";

  const redirectUri = env === "development" ? localHostUrl : netlifyUrl;
  console.log({ netlifyUrl, redirectUri, env });

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigation;
