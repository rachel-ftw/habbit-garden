/** @jsxImportSource @emotion/react */

import useDailies from "./use-dailies";
import styles from "./styles";
import AddDaily from "./add-daily";
import DailiesContainer from "./container";
import {
  isComputer,
  useScreenDimensions,
} from "../../hooks-providers/provider.dimensions";
import { ViewTypes } from "../game";

interface IProps {
  view: ViewTypes;
}

const Dailies = ({ view }: IProps) => {
  const { dailies, update, error } = useDailies();
  const { viewType } = useScreenDimensions();
  const onSmallView = !isComputer(viewType);

  if (view !== ViewTypes.Dailies && onSmallView) return null;

  return (
    <div css={styles.container(onSmallView)}>
      <AddDaily
        addDaily={update.add}
        clearError={update.clearError}
        error={error}
      />
      <DailiesContainer dailies={dailies} update={update} />
    </div>
  );
};

export default Dailies;
