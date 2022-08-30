/** @jsxImportSource @emotion/react */
import rootStyles from "../../styles";
import useDailies from "./use-dailies";
import styles from "./styles";
import AddDaily from "./add-daily";
import DailiesList from "./dailies";

const Dailies = () => {
  const { dailies, update, error } = useDailies();

  return (
    <div css={[rootStyles.dailies, styles.container]}>
      <AddDaily addDaily={update.add} error={error} />
      <DailiesList dailies={dailies} update={update} />
    </div>
  );
};

export default Dailies;
