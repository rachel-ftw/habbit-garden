import { useAuth0 } from "@auth0/auth0-react";
import Game from "./game";

const Landing = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) return <Game />;

  return (
    <div>
      <h1>landing page</h1>
      <p>this page sells you on the project</p>
    </div>
  );
};

export default Landing;
