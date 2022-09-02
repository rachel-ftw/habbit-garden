import { useState } from "react";
import Dailies from "../game.dailies";
import Garden from "../game.garden";
import GameNav from "./nav";

export enum ViewTypes {
  Dailies,
  Garden,
}

const Game = () => {
  const [view, setView] = useState<ViewTypes>(ViewTypes.Garden);

  return (
    <>
      <GameNav view={view} setView={setView} />
      <Dailies view={view} />
      <Garden view={view} />
    </>
  );
};

export default Game;
