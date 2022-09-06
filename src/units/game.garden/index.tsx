/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Button from "../../components/button";
import {
  isComputer,
  useScreenDimensions,
} from "../../hooks-providers/provider.dimensions";
import { ViewTypes } from "../game";
import Library from "./library";
import Garden from "./garden";
import styles from "./styles";
import Store from "./store";

interface IProps {
  view: ViewTypes;
}

enum GameView {
  Library,
  Garden,
  Store,
}

const Game = ({ view }: IProps) => {
  const [gameView, setGameView] = useState<GameView>(GameView.Garden);
  const { viewType } = useScreenDimensions();
  const onSmallView = !isComputer(viewType);

  if (view !== ViewTypes.Garden && onSmallView) return null;

  const setView = (view: GameView) => () => setGameView(view);
  const viewIs = (v: GameView) => gameView === v;

  return (
    <div css={styles.container(onSmallView)}>
      <nav>
        <Button text="🍄 garden" onClick={setView(GameView.Garden)} />
        <Button text="📚 library" onClick={setView(GameView.Library)} />
        <Button text="💸 store" onClick={setView(GameView.Store)} />
      </nav>
      {viewIs(GameView.Garden) && <Garden />}
      {viewIs(GameView.Library) && <Library />}
      {viewIs(GameView.Store) && <Store />}
    </div>
  );
};

export default Game;
