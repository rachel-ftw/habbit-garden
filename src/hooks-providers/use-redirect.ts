/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();
  const redirectTo = (indexPath: string) => void navigate(indexPath);

  return redirectTo;
};

export default useRedirect;
