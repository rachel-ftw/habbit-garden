/** @jsxImportSource @emotion/react */

import useDailies from "./use-dailies";
import styles from "./styles";
import AddDaily from "./add-daily";
import DailiesContainer from "./container";

const Dailies = () => {
  const { dailies, update, error } = useDailies();

  return (
    <div css={styles.container}>
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
