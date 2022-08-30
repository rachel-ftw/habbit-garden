/** @jsxImportSource @emotion/react */
import rootStyles from "../../styles";
import Daily from "./daily";
import useDailies, { IDaily } from "./use-dailies";
import styles from "./styles";
import AddDaily from "./add-daily";

const Dailies = () => {
  const { dailies, updateDaily, ...rest } = useDailies();

  return (
    <div css={[rootStyles.dailies, styles.container]}>
      <AddDaily {...rest} />
      <div css={styles.listLayout}>
        {dailies.map((dailyInfo: IDaily, i) => (
          <Daily
            key={dailyInfo.id}
            {...dailyInfo}
            updateDaily={updateDaily(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dailies;
