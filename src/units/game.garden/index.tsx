/** @jsxImportSource @emotion/react */

import Button from "../../components/button";
import {
  isComputer,
  useScreenDimensions,
} from "../../hooks-providers/dimensions-provider";
import { ViewTypes } from "../game";
import Scene from "./scene";
import styles from "./styles";

interface IProps {
  view: ViewTypes;
}

const Garden = ({ view }: IProps) => {
  const { viewType } = useScreenDimensions();
  const onSmallView = !isComputer(viewType);

  if (view !== ViewTypes.Garden && onSmallView) return null;

  return (
    <div css={styles.container(onSmallView)}>
      <nav>
        <Button text="🍄 garden" />
        <Button text="📚 library" />
      </nav>
      <h1>garden 🍄</h1>
      <Scene />
    </div>
  );
};

export default Garden;
