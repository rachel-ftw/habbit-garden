/** @jsxImportSource @emotion/react */

import { useAuth0 } from "@auth0/auth0-react";
import { isNil } from "ramda";
import { useLocation } from "react-router-dom";
import useRedirect from "./use-redirect";

const useRedirectIfNotLoggedIn = () => {
  const { user } = useAuth0();
  const location = useLocation();
  const redirectTo = useRedirect();

  const redirectToHome = () => {
    const indexPath = "/";
    if (isNil(user) && location.pathname !== indexPath) redirectTo(indexPath);
  };

  return redirectToHome;
};

export default useRedirectIfNotLoggedIn;
