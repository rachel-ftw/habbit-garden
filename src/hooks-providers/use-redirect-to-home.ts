/** @jsxImportSource @emotion/react */
import { useAuth0 } from "@auth0/auth0-react";
import { isNil } from "ramda";
import { useLocation, useNavigate } from "react-router-dom";

const useRedirectIfNotLoggedIn = () => {
  const { user } = useAuth0();
  const location = useLocation();
  const navigate = useNavigate();

  const redirectToHome = () => {
    const indexPath = "/";
    if (isNil(user) && location.pathname !== indexPath) navigate(indexPath);
  };

  return redirectToHome;
};

export default useRedirectIfNotLoggedIn;
