import { useAuth0 } from "@auth0/auth0-react";
import Game from "./game";

const Landing = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading</div>;
  if (isAuthenticated) return <Game />;

  return (
    <div>
      <h1>landing page</h1>
      <p>this page sells you on the project</p>
    </div>
  );
};

export default Landing;
