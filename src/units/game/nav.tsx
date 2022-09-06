/** @jsxImportSource @emotion/react */

import Button from "../../components/button";
import {
  useScreenDimensions,
  isComputer,
} from "../../hooks-providers/provider.dimensions";
import { ViewTypes } from "./index";
import styles from "./styles";

interface IProps {
  view: ViewTypes;
  setView: any;
}

const GameNav = ({ view, setView }: IProps) => {
  const { viewType } = useScreenDimensions();

  if (isComputer(viewType)) return null;

  const determineProps = (v: ViewTypes) => ({
    style: styles.button(view === v),
    onClick: () => setView(v),
  });

  return (
    <div css={styles.container}>
      <Button text="daily todos" {...determineProps(ViewTypes.Dailies)} />
      <Button text="garden" {...determineProps(ViewTypes.Garden)} />
    </div>
  );
};

export default GameNav;
