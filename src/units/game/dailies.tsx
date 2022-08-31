/** @jsxImportSource @emotion/react */
import useDailies from "./use-dailies";
import styles from "./dailies.styles";
import AddDaily from "./dailies.add-daily";
import DailiesList from "./dailies.container";

const Dailies = () => {
  const { dailies, update, error } = useDailies();

  return (
    <div css={styles.container}>
      <AddDaily addDaily={update.add} error={error} />
      <DailiesList dailies={dailies} update={update} />
    </div>
  );
};

export default Dailies;
