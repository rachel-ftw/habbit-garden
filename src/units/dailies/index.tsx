/** @jsxImportSource @emotion/react */
import rootStyles from "../../styles";
import Daily from "./daily";
import useDailies, { IDaily } from "./use-dailies";
import styles from "./styles";
import { useState } from "react";

const Dailies = () => {
  const { dailies, addDaily, updateDaily, error } = useDailies();

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);
  const clearForm = () => {
    setShowForm(false);
  };

  const add = (e: any) => {
    if (e.target[0].value !== "") {
      clearForm();
    }
    addDaily(e);
  };

  return (
    <div css={[rootStyles.dailies, styles.container]}>
      <div css={styles.addContainer}>
        <h3 css={styles.addTitle}>Dailies</h3>
        <button css={styles.addButton} onClick={toggleForm}>
          add
        </button>
        {showForm && (
          <form css={styles.addForm} onSubmit={add}>
            <p>new daily</p>
            <label htmlFor={"title"}>title</label>:
            <input type="input" id={"title"} />
            <button type="submit">add</button>{" "}
            <button onClick={clearForm}>cancel</button>
            {error.length > 0 && <p>{error}</p>}
          </form>
        )}
      </div>
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
