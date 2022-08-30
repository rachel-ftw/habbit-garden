/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styles from "./styles";

const AddDaily = ({ addDaily, error }: any) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);
  const clearForm = () => setShowForm(false);

  const add = (e: any) => {
    if (e.target[0].value !== "") clearForm();
    addDaily(e);
  };

  return (
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
  );
};

export default AddDaily;
