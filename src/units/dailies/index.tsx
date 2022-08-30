/** @jsxImportSource @emotion/react */
import styles from "../../styles";
import Daily from "./daily";
import useDailies, { IDaily } from "./use-dailies";

const Dailies = () => {
  const { dailies, addDaily, toggleDaily } = useDailies();

  return (
    <div css={styles.dailies}>
      <div>
        Dailies <button onClick={addDaily}>add</button>
      </div>
      <div>
        {dailies.map((dailyInfo: IDaily, i) => (
          <Daily key={dailyInfo.id} onClick={toggleDaily(i)} {...dailyInfo} />
        ))}
      </div>
    </div>
  );
};

export default Dailies;
