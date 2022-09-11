/** @jsxImportSource @emotion/react */

import { useAuth0 } from "@auth0/auth0-react";
import { isNil } from "ramda";
import { useLocation } from "react-router-dom";
import checkIfInDev from "../utils/check-if-in-dev";
import useRedirect from "./use-redirect";

const useRedirectIfNotLoggedIn = () => {
  const { user } = useAuth0();
  const location = useLocation();
  const redirectTo = useRedirect();
  const isDevEnv = checkIfInDev(process.env.NODE_ENV);

  const redirectToHome = () => {
    const indexPath = "/";
    const shouldRedirect =
      isNil(user) && location.pathname !== indexPath && !isDevEnv;

    if (shouldRedirect) redirectTo(indexPath);
  };

  return redirectToHome;
};

export default useRedirectIfNotLoggedIn;
